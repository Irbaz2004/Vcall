import React, { useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';

export default function Roompage() {
  const { roomId } = useParams();
  const meetingRef = useRef(null);

  useEffect(() => {
    const Meeting = async (element) => {
      const appID = 1746815442;
      const serverSecret = "ffbba34738e58765b9fb0c7fe2a2a890";
      const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomId, Date.now().toString(), "Irbaz");
      const zc = ZegoUIKitPrebuilt.create(kitToken);
      zc.joinRoom({
        container: element,
        sharedLinks: [
          {
            name: 'Copy Link',
            url: `${window.location.origin}/room/${roomId}`,
          }
        ],
        scenario: {
          mode: ZegoUIKitPrebuilt.OneONoneCall,
        },
        showScreenSharingButton: false,
      });
    }

    if (meetingRef.current) {
      Meeting(meetingRef.current);
    }
  }, [roomId]);

  return (
    <div className="meeting-container">
      <div ref={meetingRef} />
    </div>
  );
}
