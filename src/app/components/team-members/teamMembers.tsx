"use client";
import Image from "next/image";
import { apiFetch, baseUrl } from "@/utils/apiFetch";
import { useEffect, useState } from "react";
export default function TeamMembers() {
  const [teamMembers, setTeamMembers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await apiFetch("/members?populate=*", {
          method: "GET",
        });
        const data = await response.json();
        setTeamMembers(data.data);
      } catch (error) {
        console.error("Error fetching team members:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <section className="bg-white text-brand-green border border-dashed shadow-brand-green border-brand-green">
      <div className="py-8 px-4 mx-auto w-full lg:py-12 lg:px-6">
        <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-16">
          <h2 className="mb-4 text-3xl sm:text-4xl tracking-tight font-extrabold">
            Notre équipe
          </h2>
          <p className="font-light text-lg sm:text-xl text-black">
            Nous sommes une équipe de professionnels à votre service
          </p>
        </div>
        <div className="grid gap-8 mb-6 lg:mb-16 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {teamMembers &&
            teamMembers.map((member: any) => (
              <div
                key={member.id}
                className="flex flex-col sm:flex-row items-center p-4 bg-brand-green rounded-lg shadow animate__animated animate__fadeIn"
              >
                <div className="mb-4 sm:mb-0 sm:mr-4">
                  <img
                    width={128}
                    height={128}
                    className="rounded-lg sm:rounded-none sm:rounded-l-lg"
                    src={baseUrl + member.attributes.photo.data.attributes.url}
                    alt={`Photo of ${member.attributes.name}`}
                  />
                </div>
                <div className="text-center sm:text-left text-black">
                  <h3 className="text-xl font-bold tracking-tight text-white">
                    <a href="#">{member.attributes.name}</a>
                  </h3>
                  <span>{member.attributes.role}</span>
                  <p className="mt-3 mb-4 font-light">
                    {member.attributes.description}
                  </p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
