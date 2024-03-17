"use client";
import { apiFetch } from "@/utils/apiFetch";
import React, { useEffect, useState } from "react";

export default function Calendar({ events }: any) {
  const [fetchedEvents, setFetchedEvents] = useState<Array<any>>([]);

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const response = await apiFetch("/events?sort[0]=date", {
        method: "GET",
      });
      const data = await response.json();
      data.data = data.data.slice(0, 3);

      setFetchedEvents(data.data);
    } catch (error) {
      console.error("Error fetching events:", error);
    }
  };

  return (
    <div className="flex flex-col text-center px-4 sm:px-6 lg:px-8">
      <h3 className="text-xl font-semibold my-5">Les événements de ABA'A</h3>
      <div className="flex flex-wrap justify-between -mx-2">
        {fetchedEvents &&
          fetchedEvents.map((event, index) => (
            <div
              key={index}
              className={`w-full sm:w-1/2 lg:w-1/3 px-2 mb-4 transform transition-all duration-500 ${
                index === 0
                  ? "scale-105 bg-brand-green"
                  : "scale-100 border-dashed border-2 border-brand-green"
              } rounded-lg shadow-lg p-4`}
            >
              <h2
                className={`flex justify-center items-center text-lg font-bold mb-2 ${
                  index === 0 ? "text-white" : "text-brand-green"
                }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 500 500"
                  width="20"
                  height="20"
                  className="mr-2 inline-block"
                >
                  <rect
                    x="50"
                    y="60"
                    width="400"
                    height="380"
                    fill={index === 0 ? "#5f409e" : "#409e5f"}
                  />
                  <line
                    x1="50"
                    y1="120"
                    x2="450"
                    y2="120"
                    stroke={index === 0 ? "#409e5f" : "#5f409e"}
                    strokeWidth="20"
                  />
                  <rect x="85" y="20" width="50" height="50" fill="#FFFFFF" />
                  <rect x="365" y="20" width="50" height="50" fill="#FFFFFF" />
                </svg>
                {event.attributes.date}
              </h2>
              <h3 className="text-md font-semibold text-black">
                {event.attributes.title}
              </h3>
              <p
                className={`text-lg font-bold mt-1 ${
                  index === 0 ? "text-white" : "text-brand-green"
                }`}
              >
                {event.attributes.description}
              </p>
            </div>
          ))}
      </div>
    </div>
  );
}
