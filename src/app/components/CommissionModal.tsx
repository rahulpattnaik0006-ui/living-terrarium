"use client";

import { useState } from "react";
import { X, CheckCircle, Sparkles, Send } from "lucide-react";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export default function CommissionModal({ isOpen, onClose }: Props) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [vesselType, setVesselType] = useState("Closed Glass Bowl");
  const [lighting, setLighting] = useState("No (Natural Light)");
  const [figurine, setFigurine] = useState("Zen Buddha");
  const [budget, setBudget] = useState("₹3,500 - ₹5,500");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/inquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          phone,
          vesselType,
          lighting,
          figurine,
          budget,
        }),
      });

      if (res.ok) {
        setSuccess(true);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-end sm:items-center justify-center p-0 sm:p-4">
      <div className="w-full max-w-md bg-[#0a100c] border border-[#1e2e21] rounded-t-3xl sm:rounded-3xl p-6 text-[#f2f7f3] max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between pb-4 border-b border-[#18261b]">
          <div className="flex items-center gap-2">
            <Sparkles size={16} className="text-[#86efac]" />
            <h3 className="font-serif font-bold text-lg text-white">Custom Commission</h3>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-[#111c13] flex items-center justify-center text-slate-400"
          >
            <X size={16} />
          </button>
        </div>

        {success ? (
          <div className="py-10 text-center space-y-3">
            <CheckCircle size={44} className="text-[#86efac] mx-auto" />
            <h4 className="font-serif text-xl font-bold text-white">Request Registered</h4>
            <p className="text-xs text-slate-300 max-w-xs mx-auto leading-relaxed">
              We have received your custom biome specifications. Our artisan will reach out via WhatsApp shortly.
            </p>
            <button
              onClick={() => {
                setSuccess(false);
                onClose();
              }}
              className="mt-4 px-6 py-2.5 rounded-full bg-[#22c55e] text-black text-xs font-mono font-bold"
            >
              Done
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-5 space-y-4 text-xs font-mono">
            <div>
              <label className="text-slate-400 block mb-1">Your Name</label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Rahul Sharma"
                className="w-full bg-[#101812] border border-[#1f3022] rounded-xl px-3.5 py-2.5 text-white outline-none focus:border-[#86efac]"
              />
            </div>

            <div>
              <label className="text-slate-400 block mb-1">WhatsApp Phone Number</label>
              <input
                type="tel"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="e.g. 9876543210"
                className="w-full bg-[#101812] border border-[#1f3022] rounded-xl px-3.5 py-2.5 text-white outline-none focus:border-[#86efac]"
              />
            </div>

            <div>
              <label className="text-slate-400 block mb-1">Biome Style & Vessel</label>
              <select
                value={vesselType}
                onChange={(e) => setVesselType(e.target.value)}
                className="w-full bg-[#101812] border border-[#1f3022] rounded-xl px-3 py-2.5 text-white outline-none focus:border-[#86efac]"
              >
                <option value="Closed Glass Bowl">Closed Glass Bowl (Terrarium)</option>
                <option value="Column Lamp Terrarium">Column Lamp Terrarium (Built-in Light)</option>
                <option value="Dual-Realm Waterfall">Dual-Realm Waterfall (Paludarium)</option>
                <option value="Iwagumi Aquascape">Iwagumi Aquascape (Rimless Tank)</option>
              </select>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-slate-400 block mb-1">Centerpiece Figurine</label>
                <select
                  value={figurine}
                  onChange={(e) => setFigurine(e.target.value)}
                  className="w-full bg-[#101812] border border-[#1f3022] rounded-xl px-2.5 py-2.5 text-white outline-none focus:border-[#86efac]"
                >
                  <option value="Zen Buddha">Zen Buddha</option>
                  <option value="Miniature Couple">Miniature Couple</option>
                  <option value="Stone Staircase Path">Stone Staircase</option>
                  <option value="Raw Natural Driftwood">Pure Hardscape Only</option>
                </select>
              </div>

              <div>
                <label className="text-slate-400 block mb-1">Target Budget</label>
                <select
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                  className="w-full bg-[#101812] border border-[#1f3022] rounded-xl px-2.5 py-2.5 text-white outline-none focus:border-[#86efac]"
                >
                  <option value="₹2,500 - ₹3,500">₹2,500 - ₹3,500</option>
                  <option value="₹3,500 - ₹5,500">₹3,500 - ₹5,500</option>
                  <option value="₹6,000+ (Large)">₹6,000+ (Large Setup)</option>
                </select>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 mt-2 rounded-xl bg-[#22c55e] text-black font-bold text-xs flex items-center justify-center gap-2 cursor-pointer active:scale-98 transition-transform disabled:opacity-50"
            >
              {loading ? (
                <span>Submitting to Studio...</span>
              ) : (
                <>
                  <Send size={14} /> Submit Commission Specs
                </>
              )}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}