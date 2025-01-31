```javascript
import * as React from 'react';
import { Camera, CameraType } from 'expo-camera';
import { useState, useEffect } from 'react';

const CameraScreen = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(CameraType.back);
  const [cameraError, setCameraError] = useState(null);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleCameraError = (error) => {
    setCameraError(error);
    console.error('Camera error:', error);
  };

  if (hasPermission === null) {
    return <View><Text>Requesting permissions...</Text></View>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  if (cameraError) {
    return <Text>Camera error: {cameraError.message}</Text>;
  }

  return (
    <Camera style={{ flex: 1 }} type={type} onCameraError={handleCameraError}>
      {/* Camera controls here */}
    </Camera>
  );
};

export default CameraScreen;
```