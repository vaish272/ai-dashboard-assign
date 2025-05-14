"use client";

import { useEffect, useState } from "react";
import Header from "../components/Header";
import AvatarCard from "../components/AvatarCard";
import Modal from "../components/Modal";

export default function Home() {
  const [users, setUsers] = useState<any[]>([]);
  const [isModalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    fetch("https://dummyjson.com/users?limit=3")
      .then((res) => res.json())
      .then((data) => setUsers(data.users || []))
      .catch((err) => console.error("API error:", err));
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0b1120] via-[#0f172a] to-[#0b1120] text-slate-100">
      <Header />

      <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {users.map((user) => (
          <AvatarCard
            key={user.id}
            name={user.firstName}
            image={user.image}
          />
        ))}
      </div>

      <button
        onClick={() => setModalOpen(true)}
        className="fixed bottom-6 right-6 bg-sky-400 text-slate-900 px-6 py-3 rounded-full shadow-lg hover:bg-pink-400 hover:text-white transition-all duration-300 text-lg font-semibold"
      >
        + Create New Avatar
      </button>

      <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
}

