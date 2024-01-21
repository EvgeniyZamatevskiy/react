import { useState, useEffect } from "react";

type ErrorType = {
  code: number;
  message: string;
};

type LocationType = {
  isLoaded: boolean;
  coordinates?: { lat: number; lon: number };
  error?: ErrorType;
};

export const useGeoLocation = () => {
  const [location, setLocation] = useState<LocationType>({
    isLoaded: false,
    coordinates: { lat: 0, lon: 0 },
  });

  const onSuccess = (location: GeolocationPosition): void => {
    setLocation({
      isLoaded: true,
      coordinates: {
        lat: location.coords.latitude,
        lon: location.coords.longitude,
      },
    });
  };

  const onError = (error: ErrorType): void => {
    setLocation({
      isLoaded: true,
      error: { code: error.code, message: error.message },
    });
  };

  useEffect(() => {
    if (!("geolocation" in navigator)) {
      onError({ code: 0, message: "Geolocation not supported" });
    }

    navigator.geolocation.getCurrentPosition(onSuccess, onError);
  }, []);

  return location;
};
