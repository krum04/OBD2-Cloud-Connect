import firebase_admin
from firebase_admin import credentials
from firebase_admin import db
import time
import obd
#import pid keys
from commands import pidSens
from commands import gearDisp

#Connect to USB OBDII adapter
print('Executing secret handshake')
connection = obd.OBD("/dev/ttyUSB0")
print("We're in!")

# Fetch the service account key for firebase from JSON file contents
cred = credentials.Certificate('OBDII.json')
# Initialize the app with a service account, granting admin privileges
firebase_admin.initialize_app(cred, {
    'databaseURL': 'https://obdiidata.firebaseio.com/'
})

ref = db.reference('/')

#loop will query ECU and upload data as a single dictionary to Firebase
while True:
    for k,v in pidSens.items():
        #check that the value is not empty
        if str(pidSens[k]) != "":
        #ommit passing "GEAR" to the query command since it is a custom key
            if k != 'GEAR':
                cmd = obd.commands[k]
                response = connection.query(cmd)
                if not response.is_null():
                    pidSens[k]=str(response.value.magnitude)

    #if the speed value is above 1, we will assume that the car is in a gear
    #and we will run the gearDisp function and calclate the gear
    speed = pidSens.get('SPEED')
    if int(speed)>1:
        pidSens['GEAR']=gearDisp(pidSens['RPM'],pidSens['SPEED'])
    else:
        pidSens['GEAR']='N'
    #push our completed dictionary to firebase
    ref.set({
            ('object'):
            pidSens
            })
    time.sleep(.25)
