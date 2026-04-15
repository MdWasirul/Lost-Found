import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { MapPin, Calendar, User, Mail, ArrowLeft } from 'lucide-react';
import API from '../api';

const ItemDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [item, setItem] = useState(null);

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const { data } = await API.get(`/items/${id}`);
        setItem(data);
      } catch (err) {
        console.log(err);
        alert("Item not found");
        navigate('/');
      }
    };
    fetchItem();
  }, [id, navigate]);

  if (!item) return <div className="h-screen flex items-center justify-center font-bold text-indigo-600 animate-pulse">Loading Details...</div>;

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4">
      <button onClick={() => navigate(-1)} className="max-w-4xl mx-auto mb-6 flex items-center gap-2 text-slate-500 hover:text-indigo-600 transition-colors font-bold">
        <ArrowLeft size={20} /> Back to Feed
      </button>

      <div className="max-w-4xl mx-auto bg-white rounded-[40px] shadow-xl shadow-slate-200/50 overflow-hidden border border-white">
        <div className={`h-4 ${item.type === 'lost' ? 'bg-red-500' : 'bg-green-500'}`} />
        
        <div className="p-8 md:p-12">
          <div className="flex flex-wrap gap-3 mb-6">
            <span className="bg-indigo-50 text-indigo-600 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest">{item.category}</span>
            <span className={`px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest ${item.type === 'lost' ? 'bg-red-50 text-red-600' : 'bg-green-50 text-green-600'}`}>{item.type}</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 leading-tight">{item.title}</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            <div className="flex items-center gap-4 bg-slate-50 p-4 rounded-2xl">
              <div className="bg-white p-3 rounded-xl shadow-sm text-indigo-600"><MapPin size={24} /></div>
              <div><p className="text-xs font-bold text-slate-400 uppercase">Location</p><p className="font-bold text-slate-700">{item.location}</p></div>
            </div>
            <div className="flex items-center gap-4 bg-slate-50 p-4 rounded-2xl">
              <div className="bg-white p-3 rounded-xl shadow-sm text-indigo-600"><Calendar size={24} /></div>
              <div><p className="text-xs font-bold text-slate-400 uppercase">Date Reported</p><p className="font-bold text-slate-700">{new Date(item.createdAt).toLocaleDateString()}</p></div>
            </div>
          </div>

          <div className="mb-12">
            <h3 className="text-lg font-black text-slate-800 mb-4 flex items-center gap-2">Description</h3>
            <p className="text-slate-600 leading-relaxed text-lg bg-slate-50/50 p-6 rounded-3xl border border-dashed border-slate-200">{item.description}</p>
          </div>

          <div className="bg-indigo-600 rounded-[32px] p-8 text-white flex flex-col md:flex-row justify-between items-center gap-6 shadow-2xl shadow-indigo-200">
            <div className="flex items-center gap-4">
              <div className="h-14 w-14 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-md"><User size={28} /></div>
              <div>
                <p className="text-indigo-100 text-xs font-bold uppercase tracking-widest">Reported By</p>
                <h4 className="text-xl font-black">{item.reportedBy?.name || "Verified User"}</h4>
              </div>
            </div>
            <a href={`mailto:${item.reportedBy?.email}`} className="w-full md:w-auto bg-white text-indigo-600 px-10 py-4 rounded-2xl font-black flex items-center justify-center gap-3 hover:bg-indigo-50 transition-colors">
              <Mail size={20} /> Contact Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;