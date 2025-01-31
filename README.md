# Expo Camera Preview Freeze on Android

This repository demonstrates a bug encountered when using the Expo Camera API on certain Android devices. The camera preview may freeze or fail to render, often without informative error messages.

## Bug Description
The problem is inconsistent across Android devices and versions.  Sometimes the camera preview simply freezes; other times it fails to start altogether.

## Reproduction
1. Clone the repository.
2. Run the project on an affected Android device.
3. Observe the camera preview.  The preview may freeze or fail to render correctly.

## Solution
The solution involves using a combination of permission checks, camera type selection (if possible), and error handling to mitigate the issue.  The provided `cameraBugSolution.js` file illustrates this.