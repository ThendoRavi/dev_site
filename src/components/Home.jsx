import React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import hero from "../assets/hero.jpg";
import coder from "../assets/code-slash.svg";
import webDev from "../assets/cloud.svg";

import "../App.css";

function Home() {
  return (
    <div>
      <NavBar />
      <main className="flex-1">
        <section id="about" className="w-full py-12 sm:py-16 md:py-12 lg:py-12">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none ">
                    Thendo Ravhengani
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Final year Computer Science student at the University of
                    Witwatersrand with a passion for software development and
                    cloud computing.
                  </p>
                </div>
              </div>
              <img
                src={hero}
                width="999"
                height="999"
                alt="Hero"
                className="mx-auto aspect-video rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
              />
            </div>
          </div>
        </section>

        <section
          id="features"
          className="w-full py-12 sm:py-16 md:py-12 lg:py-12 bg-muted "
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-3">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl ">
                  Aspiring Software Developer
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Seeking an environment where I can contribute my
                  problem-solving skills and strong drive to master my coding
                  expertise and deliver high-quality software solutions.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 lg:grid-cols-2 lg:gap-12 mr-15">
              <div className="grid gap-1">
                <img
                  src={coder}
                  width="30"
                  height="30"
                  alt="Logo"
                  //className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
                />
                <h3 className="text-xl font-bold">Avid Coder</h3>
                <p className="text-muted-foreground">
                  Over six years of coding experience, in different
                  environments.
                </p>
              </div>
              <div className="grid gap-1">
                <img
                  src={webDev}
                  width="30"
                  height="30"
                  alt="Logo"
                  //className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
                />
                <h3 className="text-xl font-bold">Web Dev</h3>
                <p className="text-muted-foreground">
                  Intermediate full-stack development experience with the MERN
                  stack (MongooseDB, Express, React, Node.js) and JavaScript for
                  simple and complex web application solutions.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Home;
