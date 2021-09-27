# Replacement Remote for Viewsonic M1 Mini+

A DIY remote for those who have misplaced the original and cannot purchase a replacement.

## Created with
- NodeMCU ESP8266 (ESP-12E) - serial wireless module
- IR LED - instruction transmission
- C++/Arduino - software for ESP-12E
- React - web app implementation
- ThingSpeak - API connection to ESP-12E

## The Process
1. Decode IR signals from official remote
1. Verify transmission of correct IR codes using IR LED and IR receiver
1. Check that transmitted IR signals control the projector as expected
1. Connect NodeMCU ESP-12E to WIFI
1. Create channel on ThingSpeak to communicate wirelessly with ESP-12E via API
1. Develop web app interface for virtual remote control
1. Test!

## Future work
- Implement communication using web sockets to minimize latency
- Design a 3D-printed mount to attach IR LED circuit to projector