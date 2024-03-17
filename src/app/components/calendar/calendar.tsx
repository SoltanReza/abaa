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
    <div className="flex flex-col text-center ">
      <h3>Les événements de ABA'A</h3>
      <div className="flex justify-between mx-10 my-5 text-left ">
        {fetchedEvents &&
          fetchedEvents.map((event: any, index: any) => (
            <div
              key={index}
              className={`flex-1 mx-8 p-4 rounded-lg shadow-lg ${
                index === 0
                  ? "bg-brand-green"
                  : "border-dashed border-2 border-brand-green"
              } transform ${
                index === 0 ? "scale-105" : "scale-100"
              } transition-all duration-500`}
            >
              <h2
                className={`flex justify-center items-center text-lg font-bold ${
                  index === 0 ? "text-white" : "text-brand-green"
                }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 500 500"
                  width="20"
                  height="20"
                  style={{ marginRight: "5px", verticalAlign: "middle" }}
                >
                  <rect
                    x="50"
                    y="60"
                    width="400"
                    height="380"
                    style={{ fill: index === 0 ? "#5f409e" : "#409e5f" }}
                  />
                  <line
                    x1="50"
                    y1="120"
                    x2="450"
                    y2="120"
                    style={{
                      stroke: index === 0 ? "#409e5f" : "#5f409e",
                      strokeWidth: 20,
                    }}
                  />
                  <rect
                    x="85"
                    y="20"
                    width="50"
                    height="50"
                    style={{ fill: "#FFFFFF" }}
                  />
                  <rect
                    x="365"
                    y="20"
                    width="50"
                    height="50"
                    style={{ fill: "#FFFFFF" }}
                  />
                </svg>
                {event.attributes.date}
              </h2>
              <h3 className="text-md font-semibold text-black mt-2">
                {event.attributes.title}
              </h3>
              <p
                className={`text-lg ${
                  index === 0 ? "text-white" : "text-brand-green"
                } font-bold  mt-1`}
              >
                {event.attributes.description}
              </p>
            </div>
          ))}
      </div>
    </div>
  );
}
