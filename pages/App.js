/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from "react";
import React, { Component } from "react";
import "./App.css";
import { Popover, Transition } from "@headlessui/react";

import ReactPlayer from "react-player";
import logo from "./logo.png"; // Tell webpack this JS file uses this image
import thumb0 from "./0.jpg";
import thumb1 from "./1.jpg";
import thumb2 from "./2.jpg";
import thumb3 from "./3.jpg";
import thumb4 from "./4.jpg";
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  return (
    <Popover className="relative bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <a href="#">
              <span className="sr-only">Workflow</span>
              <h1 className="text-4xl">cntpd</h1>
            </a>
          </div>
          <div className="-mr-2 -my-2 md:hidden">
            <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
              <span className="sr-only">Open menu</span>
            </Popover.Button>
          </div>
          <Popover.Group as="nav" className="hidden md:flex space-x-10">
            <Popover className="relative">
              {({ open }) => (
                <>
                  <Popover.Button
                    className={classNames(
                      open ? "text-gray-900" : "text-gray-500",
                      "group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    )}
                  >
                    <span>Media Options</span>
                  </Popover.Button>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel className="absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
                      <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                        <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8"></div>
                        <div className="px-5 py-5 bg-gray-50 space-y-6 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8"></div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>

            <a
              href="#"
              className="text-base font-medium text-gray-500 hover:text-gray-900"
            >
              <input
                class="search py-1 px-1"
                type="text"
                placeholder="Search by the title ..."
              />
            </a>

            <Popover className="relative">
              {({ open }) => (
                <>
                  <Popover.Button
                    className={classNames(
                      open ? "text-gray-900" : "text-gray-500",
                      "group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    )}
                  >
                    <span>More</span>
                  </Popover.Button>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel className="absolute z-10 left-1/2 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-md sm:px-0">
                      <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                        <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8"></div>
                        <div className="px-5 py-5 bg-gray-50 sm:px-8 sm:py-8">
                          <div>
                            <h3 className="text-sm tracking-wide font-medium text-gray-500 uppercase">
                              Recent Posts
                            </h3>
                            <ul role="list" className="mt-4 space-y-4"></ul>
                          </div>
                          <div className="mt-5 text-sm">
                            <a
                              href="#"
                              className="font-medium text-indigo-600 hover:text-indigo-500"
                            >
                              {" "}
                              View all posts{" "}
                              <span aria-hidden="true">&rarr;</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>
          </Popover.Group>
          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            <a
              href="#"
              className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900"
            >
              Sign in
            </a>
            <a
              href="#"
              className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
            >
              Sign up
            </a>
          </div>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
        >
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between">
                <div>
                  <img
                    className="h-8 w-auto"
                    src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                    alt="Workflow"
                  />
                </div>
                <div className="-mr-2">
                  <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">Close menu</span>
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-8"></nav>
              </div>
            </div>
            <div className="py-6 px-5 space-y-6">
              <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                <a
                  href="#"
                  className="text-base font-medium text-gray-900 hover:text-gray-700"
                >
                  Pricing
                </a>

                <a
                  href="#"
                  className="text-base font-medium text-gray-900 hover:text-gray-700"
                >
                  Docs
                </a>
              </div>
              <div>
                <a
                  href="#"
                  className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                >
                  Sign up
                </a>
                <p className="mt-6 text-center text-base font-medium text-gray-500">
                  Existing customer?{" "}
                  <a href="#" className="text-indigo-600 hover:text-indigo-500">
                    Sign in
                  </a>
                </p>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
      <div class="flex">
        <div class="w-4/5 bg-white-500 h-50 py-5 px-5">
          <ReactPlayer
            className="react-player fixed-bottom"
            url="1.mp4"
            width="100%"
            height="70%"
            controls={true}
            muted={false}
          />
        
        
        </div>
        <div class="w-1/5 bg-white-400 h-screen overflow-auto py-5 px-5">
          <ul class="max-w-md divide-y divide-gray-200 dark:divide-gray-700">
            <li class="pb-3 sm:pb-4">
              <input
                class="search py-2 px-1"
                type="text"
                placeholder="Search by the title ..."
              />

              <div class="flex items-center space-x-4">
                <div class="flex-shrink-0">
                  {/* <img class="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-1.jpg" alt="Neil image"> */}
                </div>
                <div class="flex-1 min-w-0 bg-[#f1f5f9] rounded-md p-5">
                  <img src={logo} style={{ width: 75 }} alt="Logo" />
                  <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                    My Mix
                  </p>
                  <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                    Don Toliver, Paramore, Brent Faiyaz, and more
                  </p>
                </div>
                <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white"></div>
              </div>
            </li>
          </ul>
          <ul class="max-w-md divide-y divide-gray-200 dark:divide-gray-700">
            <li class="pb-3 sm:pb-4">
              <div class="flex items-center space-x-4 flex-1 min-w-0 bg-[#f1f5f9] rounded-md p-5">
              <img src={thumb0} style={{ width: 75 }} alt="Logo" />
                
                <div class="flex-1 min-w-0 bg-[#f1f5f9] rounded-md p-5">
                 
                  <p class="text-sm font-medium text-gray-900 dark:text-white">Body [Official Music Video]
                  </p>
              
                  <p class="text-sm text-gray-500 dark:text-gray-400">
                    Summer Walker
                  </p>
                </div>
                <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                  46M views
                </div>
              </div>
            </li>
          </ul>
          <ul class="max-w-md divide-y divide-gray-200 dark:divide-gray-700">
            <li class="pb-3 sm:pb-4">
              <div class="flex items-center space-x-4">
                <div class="flex-shrink-0">
                  {/* <img class="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-1.jpg" alt="Neil image"> */}
                </div>
                <div class="flex-1 min-w-0">
                  <img src={thumb1} style={{ width: 75 }} alt="Logo" />
                  <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                    Paramore: Decode [OFFICIAL VIDEO]
                  </p>
                  <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                    Paramore
                  </p>
                </div>
                <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                  420M views
                </div>
              </div>
            </li>
          </ul>
          <ul class="max-w-md divide-y divide-gray-200 dark:divide-gray-700">
            <li class="pb-3 sm:pb-4">
              <div class="flex items-center space-x-4">
                <div class="flex-shrink-0">
                  {/* <img class="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-1.jpg" alt="Neil image"> */}
                </div>
                <div class="flex-1 min-w-0">
                  <img src={thumb2} style={{ width: 75 }} alt="Logo" />
                  <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                    Monica - Angel Of Mine (Official Music Video)
                  </p>
                  <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                    monicaofficial
                  </p>
                </div>
                <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                  117M views
                </div>
              </div>
            </li>
          </ul>
          <ul class="max-w-md divide-y divide-gray-200 dark:divide-gray-700">
            <li class="pb-3 sm:pb-4">
              <div class="flex items-center space-x-4">
                <div class="flex-shrink-0">
                  {/* <img class="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-1.jpg" alt="Neil image"> */}
                </div>
                <div class="flex-1 min-w-0">
                  <img src={thumb3} style={{ width: 75 }} alt="Logo" />
                  <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                    LANA DEL REY- BORN TO DIE
                  </p>
                  <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                    Lana Del Rey
                  </p>
                </div>
                <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                  58M views
                </div>
              </div>
            </li>
          </ul>
          <ul class="max-w-md divide-y divide-gray-200 dark:divide-gray-700">
            <li class="pb-3 sm:pb-4">
              <div class="flex items-center space-x-4">
                <div class="flex-shrink-0">
                  {/* <img class="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-1.jpg" alt="Neil image"> */}
                </div>
                <div class="flex-1 min-w-0">
                  <img src={thumb4} style={{ width: 75 }} alt="Logo" />
                  <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                    Teddy Pendergrass - Love T.K.O. (Official Audio)
                  </p>
                  <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                    Teddy Pendergrass
                  </p>
                </div>
                <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                  13M views
                </div>
              </div>
            </li>
          </ul>
          <ul class="max-w-md divide-y divide-gray-200 dark:divide-gray-700">
            <li class="pb-3 sm:pb-4">
              <div class="flex items-center space-x-4">
                <div class="flex-shrink-0">
                  {/* <img class="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-1.jpg" alt="Neil image"> */}
                </div>
                <div class="flex-1 min-w-0">
                  <img src={logo} style={{ width: 75 }} alt="Logo" />
                  <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                    Paramore: Brick By Boring Brick [OFFICIAL VIDEO]
                  </p>
                  <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                    Paramore
                  </p>
                </div>
                <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                  137M views
                </div>
              </div>
            </li>
          </ul>
          <ul class="max-w-md divide-y divide-gray-200 dark:divide-gray-700">
            <li class="pb-3 sm:pb-4">
              <div class="flex items-center space-x-4">
                <div class="flex-shrink-0">
                  {/* <img class="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-1.jpg" alt="Neil image"> */}
                </div>
                <div class="flex-1 min-w-0">
                  <img src={logo} style={{ width: 75 }} alt="Logo" />
                  <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                    Katy Perry - Teenage Dream (Official Music Video)
                  </p>
                  <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                    Katy Perry
                  </p>
                </div>
                <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                  301M views
                </div>
              </div>
            </li>
          </ul>
          <ul class="max-w-md divide-y divide-gray-200 dark:divide-gray-700">
            <li class="pb-3 sm:pb-4">
              <div class="flex items-center space-x-4">
                <div class="flex-shrink-0">
                  {/* <img class="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-1.jpg" alt="Neil image"> */}
                </div>
                <div class="flex-1 min-w-0">
                  <img src={logo} style={{ width: 75 }} alt="Logo" />
                  <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                    Yuna - Crush ft. Usher
                  </p>
                  <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                    Yuna
                  </p>
                </div>
                <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                  105M views
                </div>
              </div>
            </li>
          </ul>
          <ul class="max-w-md divide-y divide-gray-200 dark:divide-gray-700">
            <li class="pb-3 sm:pb-4">
              <div class="flex items-center space-x-4">
                <div class="flex-shrink-0">
                  {/* <img class="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-1.jpg" alt="Neil image"> */}
                </div>
                <div class="flex-1 min-w-0">
                  <img src={logo} style={{ width: 75 }} alt="Logo" />
                  <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                    Neil Sims
                  </p>
                  <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                    email@flowbite.com
                  </p>
                </div>
                <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                  $320
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </Popover>
  );
}
