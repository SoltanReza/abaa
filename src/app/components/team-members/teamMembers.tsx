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
        console.log(data);
        setTeamMembers(data.data);
      } catch (error) {
        console.error("Error fetching team members:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <section className="bg-white text-brand-green border border-dashed shadow-brand-green border-brand-green ">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-12 lg:px-6 ">
        <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold  ">
            Notre équipe
          </h2>
          <p className="font-light  lg:mb-16 sm:text-xl text-black">
            Nous sommes une équipe de professionnels a votre service
          </p>
        </div>
        <div className="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2">
          {teamMembers &&
            teamMembers.map((member: any) => (
              <div className="items-center p-4 bg-brand-green rounded-lg shadow sm:flex ">
                <a href="#">
                  <img
                    width={128}
                    height={128}
                    className="rounded-lg sm:rounded-none sm:rounded-l-lg"
                    src={baseUrl + member.attributes.photo.data.attributes.url}
                    alt={`Photo of ${member.attributes.name}`}
                  />
                </a>
                <div className="p-5  text-black">
                  <h3 className="text-xl font-bold tracking-tight text-white">
                    <a href="#">{member.attributes.name}</a>
                  </h3>
                  <span className="">{member.attributes.role}</span>
                  <p className="mt-3 mb-4 font-light ">
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
