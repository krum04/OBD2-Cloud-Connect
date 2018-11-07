import firebase_admin
from firebase_admin import credentials
from firebase_admin import db
import datetime
import time
#https://rakibul.net/fb-realtime-db-python/

# Fetch the service account key JSON file contents
cred = credentials.Certificate('obdII.json')
# Initialize the app with a service account, granting admin privileges
firebase_admin.initialize_app(cred, {
    'databaseURL': 'https://obdiidata.firebaseio.com/'
})

#function to scale values with count variable, still needs correction
def map(value, in_min, in_max, out_min, out_max):
  return int((value - in_min) * (out_max - out_min) / (in_max - in_min) + out_min)

ref = db.reference('/')
count = 1

#will use dataStart down the road as a key for logging events
#dataStart = ('ECU_Data: ' + str(datetime.datetime.now().strftime("%a, %d %B %Y %H:%M:%S")))

while True:

    count = count+3
    if count == 250:
        count = 1

    ref.set({
            ('object'):
                {   ('RPM'): int(map(count,0,100,0,55)),
                    ('SPEED'): int(map(count,0,250,0,100)),
                    ('MANIFOLDPRES'): int(map(count,0,250,-14,14)),
                    ('OILTEMP'): int(map(count,0,250,0,210)),}
                })


    time.sleep(.1)
