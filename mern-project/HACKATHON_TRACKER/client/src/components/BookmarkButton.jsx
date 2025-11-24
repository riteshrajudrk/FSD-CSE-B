import React, { useEffect, useState } from "react";
import "./BookmarkButton.css";
import { api } from "../api";

export default function BookmarkButton({ eventId }){
  const [booked, setBooked] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        const is = await api.isBookmarked(eventId);
        if (mounted) setBooked(is);
      } catch {
        // ignore
      }
    })();
    return () => { mounted = false; };
  }, [eventId]);

  async function toggle(){
    setLoading(true);
    try{
      if(!booked){
        await api.bookmarkEvent(eventId);
        setBooked(true);
      } else {
        await api.unbookmarkEvent(eventId);
        setBooked(false);
      }
    }catch(e){
      alert("Bookmark failed");
    }finally{ setLoading(false) }
  }

  return (
    <button className={`bookmark-btn ${booked ? "booked":""}`} onClick={toggle} disabled={loading}>
      {booked ? "Bookmarked" : "Bookmark"}
    </button>
  );
}
