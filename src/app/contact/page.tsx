"use client";
import React, { useState } from "react";
import AlertDialog from "../components/dialog/dialog";
import HeroSection from "../components/hero-section/heroSection";
import { apiFetch } from "@/utils/apiFetch";

const ContactPage = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [type, setType] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();

    apiFetch("/messages", {
      method: "POST",
      body: JSON.stringify({ data: { email, message, type, name } }),
    })
      .then((res) => {
        if (res.status === 200) {
          setOpenDialog(true);
        } else {
          alert("An error occurred");
        }
      })
      .catch((err) => {
        alert("An error occurred");
      });
  };

  return (
    <main>
      <AlertDialog
        title="Votre message a été envoyé avec succès!"
        description="Nous vous remercions pour votre message. Nous vous répondrons dans les plus brefs délais."
        buttonText="D'accord"
        open={openDialog}
        handleClose={() => setOpenDialog(false)}
      />
      <HeroSection
        title="Restons en contact : votre pont vers nous."
        description="Notre page de contact est plus qu'un moyen de communication, c'est votre espace pour partager, demander de l'aide ou en savoir plus sur nos formations."
        image={{
          src: "contact.svg",
          title: "Contactez-nous",
          height: 256,
          width: 256,
        }}
      />
      <div className="flex flex-col lg:flex-row justify-center items-center my-8">
        <div className="max-w-xl lg:w-1/2 mx-auto p-4">
          <h3 className="text-xl font-semibold mb-4">
            Chaque interaction compte
          </h3>
          <p className="mb-4">
            Que vous soyez un parent en quête de soutien, un bénévole désireux
            de contribuer, ou simplement quelqu'un qui cherche à en savoir plus
            sur nos initiatives, nous sommes ici pour écouter et répondre. Votre
            voix est essentielle.
          </p>
          <p className="mb-4">
            Ne laissez pas la distance nous séparer. Avec chaque message, nous
            construisons des ponts de compréhension et de soutien.
            Contactez-nous dès aujourd'hui et ensemble, explorons comment nous
            pouvons collaborer pour faire une réelle différence.
          </p>
          <p className="mb-4">
            Votre intérêt et votre soutien nous motivent à poursuivre notre
            mission avec encore plus de détermination. Nous sommes impatients de
            vous entendre et de vous accueillir dans notre communauté engagée.
          </p>
        </div>
        <form
          onSubmit={handleSubmit}
          className="w-full lg:w-1/2 max-w-xl mx-auto p-4 bg-white rounded shadow"
        >
          <div className="mb-4">
            <label
              htmlFor="nom"
              className="block mb-2 font-medium text-gray-700"
            >
              Votre nom
            </label>
            <input
              type="text"
              id="nom"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block mb-2 font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="message"
              className="block mb-2 font-medium text-gray-700"
            >
              Message
            </label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows={4}
              required
            ></textarea>
          </div>
          <div className="mb-4">
            <label className="block mb-2 font-medium text-gray-700">
              Choisissez la motif de votre message
            </label>
            <div>
              <label
                htmlFor="se-renseigner"
                className="inline-flex items-center mr-4"
              >
                <input
                  type="radio"
                  id="se-renseigner"
                  value="se-renseigner"
                  checked={type === "se-renseigner"}
                  onChange={(e) => setType(e.target.value)}
                  className="form-radio"
                  name="messageType"
                  required
                />
                <span className="ml-2">Se renseigner</span>
              </label>
              <label htmlFor="besoin-aide" className="inline-flex items-center">
                <input
                  type="radio"
                  id="besoin-aide"
                  value="besoin-aide"
                  checked={type === "besoin-aide"}
                  onChange={(e) => setType(e.target.value)}
                  className="form-radio"
                  name="messageType"
                  required
                />
                <span className="ml-2">Besoin d'aide</span>
              </label>
            </div>
          </div>
          <button type="submit" className="btn-primary">
            Envoyer
          </button>
        </form>
      </div>
    </main>
  );
};

export default ContactPage;
