# Doner
Donation app that automatically distributes funds from charity campaigns to providers using transparent linear fund transfer.

Submission for UMHackathon 2025\
Group: Autowin\
Domain: 1

## Submission Links

Presentation Slides: https://www.canva.com/design/DAGkY5dzRzg/xWCSl7tBqfybjgIm7aGN_Q/view



## Installation

The following are the steps to run the project\
1\. Go to root directory and install flutter packages:

```bash
  flutter pub get
```

2\. Add Google Maps API key to Android/iOS manifest

#### Android
In ```android/app/src/main/AndroidManifest.xml```
```xml
<manifest ...
  <application ...
    <meta-data android:name="com.google.android.geo.API_KEY"
               android:value="YOUR KEY HERE"/>
```

#### iOS
Refer the google_maps_flutter [documentation](https://pub.dev/packages/google_maps_flutter#ios)


3\. Add Gemini API key to .env (make sure it's in the root directory!)

```bash
  echo "GEMINI_API_KEY='your_api_key'" > .env
```

4\. Run the program

```bash
  flutter run
```