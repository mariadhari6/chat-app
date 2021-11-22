<template>
  <div>
    <div
      class="
        flex flex-row
        justify-between
        items-center
        py-6
        px-6
        w-full
        border-b-1
      "
    >
      <div class="items-center flex flex-row">
        <h3 class="font-poppins font-semibold text-lg">
          Messages
          <span
            ><button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
          </span>
        </h3>
        <p
          class="text-xs font-semibold bg-gray-150 py-0.5 px-2 rounded-3xl ml-2"
        >
          12
        </p>
      </div>
      <button class="text-purple-primary">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-10 h-10"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
            clip-rule="evenodd"
          />
        </svg>
      </button>
    </div>
    <div class="h-screen overflow-y-auto overflow-x-hidden px-2">
      <div class="flex flex-col">
        <label
          for="search"
          class="text-gray-400 transform translate-y-7 ml-5 cursor-text"
          ><svg
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.4"
              d="M13.7812 13.6289L10.1172 9.96484C10.9102 9.00781 11.3477 7.77734 11.3477 6.4375C11.3477 3.32031 8.77734 0.75 5.66016 0.75C2.51562 0.75 0 3.32031 0 6.4375C0 9.58203 2.54297 12.125 5.66016 12.125C6.97266 12.125 8.20312 11.6875 9.1875 10.8945L12.8516 14.5586C12.9883 14.6953 13.1523 14.75 13.3438 14.75C13.5078 14.75 13.6719 14.6953 13.7812 14.5586C14.0547 14.3125 14.0547 13.9023 13.7812 13.6289ZM1.3125 6.4375C1.3125 4.03125 3.25391 2.0625 5.6875 2.0625C8.09375 2.0625 10.0625 4.03125 10.0625 6.4375C10.0625 8.87109 8.09375 10.8125 5.6875 10.8125C3.25391 10.8125 1.3125 8.87109 1.3125 6.4375Z"
              fill="black"
            />
          </svg>
        </label>
        <input
          type="text"
          placeholder="Search message"
          class="
            px-11
            py-3
            text-sm
            outline-none
            border-none
            bg-gray-150
            rounded-xl
          "
          id="search"
        />
      </div>
      <div class="">
        <div
          class="
            my-2
            flex flex-row
            justify-between
            gap-1
            mx-1
            rounded-xl
            px-3
            py-3
            hover:bg-purple-transparent
            cursor-pointer
          "
        >
          <div class="grid grid-flow-col">
            <img
              src="../assets/images/model1.jpg"
              class="w-12 h-12 rounded-xl"
              alt=""
              srcset=""
            />
            <div class="flex flex-col gap-1 ml-2">
              <div
                class="
                  flex flex-row
                  justify-between
                  text-sm
                  gap-8
                  font-poppins font-semibold
                "
              >
                <h4 class="text-black">Alisha Diphda</h4>
              </div>
              <p class="text-xs text-gray-400">Haha oh man 🔥</p>
              <div class="flex flex-row justify-start text-xs gap-2">
                <button
                  class="
                    font-semibold
                    text-yellow-700
                    py-0.5
                    px-2
                    bg-yellow-200
                    rounded-xl
                  "
                >
                  Question
                </button>
                <button
                  class="
                    font-semibold
                    text-green-700
                    py-0.5
                    px-2
                    bg-green-200
                    rounded-xl
                  "
                >
                  Help
                </button>
              </div>
            </div>
          </div>
          <p class="text-xs font-semibold text-gray-400">12m</p>
        </div>
        <div
          class="
            my-2
            flex flex-row
            justify-between
            gap-1
            mx-1
            rounded-xl
            px-3
            py-3
            hover:bg-purple-transparent
            cursor-pointer
          "
        >
          <div class="grid grid-flow-col">
            <img
              src="../assets/images/model2.jpg"
              class="w-12 h-12 rounded-xl"
              alt=""
              srcset=""
            />
            <div class="flex flex-col gap-1 ml-2">
              <div
                class="
                  flex flex-row
                  justify-between
                  text-sm
                  gap-8
                  font-poppins font-semibold
                "
              >
                <h4 class="text-black">Mikleo</h4>
              </div>
              <p class="text-xs text-gray-400">woohoooo</p>
              <div class="flex flex-row justify-start text-xs gap-2">
                <button
                  class="
                    font-semibold
                    text-gray-400
                    border border-gray-400
                    py-0.5
                    px-2
                    rounded-xl
                  "
                >
                  Some content
                </button>
              </div>
            </div>
          </div>
          <p class="text-xs font-semibold text-gray-400">24m</p>
        </div>
        <div
          class="
            my-2
            flex flex-row
            justify-between
            gap-1
            mx-1
            rounded-xl
            px-3
            py-3
            hover:bg-purple-transparent
            cursor-pointer
          "
        >
          <div class="grid grid-flow-col">
            <img
              src="../assets/images/model3.jpg"
              class="w-12 h-12 rounded-xl"
              alt=""
              srcset=""
            />
            <div class="flex flex-col gap-1 ml-2">
              <div
                class="
                  flex flex-row
                  justify-between
                  text-sm
                  gap-8
                  font-poppins font-semibold
                "
              >
                <h4 class="text-black">Eizen</h4>
              </div>
              <p class="text-xs text-gray-400">Haha 😂</p>
              <div class="flex flex-row justify-start text-xs gap-2">
                <button
                  class="
                    font-semibold
                    text-green-700
                    py-0.5
                    px-2
                    bg-green-200
                    rounded-xl
                  "
                >
                  Hacktoberfest
                </button>
              </div>
            </div>
          </div>
          <p class="text-xs font-semibold text-gray-400">1h</p>
        </div>
        <div
          class="
            my-2
            flex flex-row
            justify-between
            gap-1
            mx-1
            rounded-xl
            px-3
            py-3
            hover:bg-purple-transparent
            cursor-pointer
          "
        >
          <div class="grid grid-flow-col">
            <img
              src="../assets/images/model4.jpg"
              class="w-12 h-12 rounded-xl"
              alt=""
              srcset=""
            />
            <div class="flex flex-col gap-1 ml-2">
              <div
                class="
                  flex flex-row
                  justify-between
                  text-sm
                  gap-8
                  font-poppins font-semibold
                "
              >
                <h4 class="text-black">Sorey</h4>
              </div>
              <p class="text-xs text-gray-400">omg, this is amazing</p>
              <div class="flex flex-row justify-start text-xs gap-2">
                <button
                  class="
                    font-semibold
                    text-yellow-700
                    py-0.5
                    px-2
                    bg-yellow-200
                    rounded-xl
                  "
                >
                  Question
                </button>
                <button
                  class="
                    font-semibold
                    text-green-700
                    py-0.5
                    px-2
                    bg-green-200
                    rounded-xl
                  "
                >
                  Help
                </button>
              </div>
            </div>
          </div>
          <p class="text-xs font-semibold text-gray-400">5h</p>
        </div>
        <div
          class="
            my-2
            flex flex-row
            justify-between
            gap-1
            mx-1
            rounded-xl
            px-3
            py-3
            hover:bg-purple-transparent
            cursor-pointer
          "
        >
          <div class="grid grid-flow-col">
            <img
              src="../assets/images/model5.jpg"
              class="w-12 h-12 rounded-xl"
              alt=""
              srcset=""
            />
            <div class="flex flex-col gap-1 ml-2">
              <div
                class="
                  flex flex-row
                  justify-between
                  text-sm
                  gap-8
                  font-poppins font-semibold
                "
              >
                <h4 class="text-black">Rose</h4>
              </div>
              <p class="text-xs text-gray-400">aww 😍</p>
              <div class="flex flex-row justify-start text-xs gap-2">
                <button
                  class="
                    font-semibold
                    text-green-700
                    py-0.5
                    px-2
                    bg-green-200
                    rounded-xl
                  "
                >
                  Request
                </button>
              </div>
            </div>
          </div>
          <p class="text-xs font-semibold text-gray-400">2d</p>
        </div>
        <div
          class="
            my-2
            flex flex-row
            justify-between
            gap-1
            mx-1
            rounded-xl
            px-3
            py-3
            hover:bg-purple-transparent
            cursor-pointer
          "
        >
          <div class="grid grid-flow-col">
            <img
              src="../assets/images/model6.jpg"
              class="w-12 h-12 rounded-xl"
              alt=""
              srcset=""
            />
            <div class="flex flex-col gap-1 ml-2">
              <div
                class="
                  flex flex-row
                  justify-between
                  text-sm
                  gap-8
                  font-poppins font-semibold
                "
              >
                <h4 class="text-black">Lailah</h4>
              </div>
              <p class="text-xs text-gray-400">perfect!</p>
              <div class="flex flex-row justify-start text-xs gap-2">
                <button
                  class="
                    font-semibold
                    text-gray-400
                    border border-gray-400
                    py-0.5
                    px-2
                    rounded-xl
                  "
                >
                  Follow up
                </button>
              </div>
            </div>
          </div>
          <p class="text-xs font-semibold text-gray-400">5d</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>
