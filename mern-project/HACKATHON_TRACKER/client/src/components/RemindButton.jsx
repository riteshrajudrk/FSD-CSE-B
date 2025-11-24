import React, { useState } from "react";
import "./RemindButton.css";
import { api } from "../api";

export default function RemindButton({ eventId }){
  const [open, setOpen] = useState(false);
  const [offset, setOffset] = useState(24);
  const [sending, setSending] = useState(false);

  async function setReminder(){
    setSending(true);
    try{
      const remindAt = new Date(Date.now() + offset*60*60*1000).toISOString();
      await api.setReminder(eventId, remindAt);
      alert("Reminder saved (mock).");
      setOpen(false);
    }catch(e){
      alert("Failed to set reminder");
    }finally{ setSending(false) }
  }

  return (
    <div className="remind-wrap">
      <button className="remind-btn" onClick={()=>setOpen(!open)}>Remind</button>
      {open && (
        <div className="remind-pop card">
          <label className="small">Remind me before (hours)</label>
          <input type="number" min="1" value={offset} onChange={(e)=>setOffset(Number(e.target.value))} />
          <div className="row" style={{marginTop:8}}>
            <button className="btn" onClick={setReminder} disabled={sending}>Set</button>
            <button className="btn" style={{background:"#e5e7eb",color:"#0f172a"}} onClick={()=>setOpen(false)}>Cancel</button>
          </div>
        </div>
      )}
    </div>
  );
}
