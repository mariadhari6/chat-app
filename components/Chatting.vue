<template>
  <div class="flex flex-col">
    <header
      class="
        bg-white
        h-20
        border border-b-1
        flex flex-row
        justify-between
        font-sans
        items-center
        px-6
      "
    >
      <div class="flex flex-row">
        <div>
          <img
            src="../assets/images/profile1.jpg"
            class="w-10 rounded-lg"
            alt=""
            srcset=""
          />
        </div>
        <div class="ml-4">
          <h2 class="font-semibold text-xl font-poppins text-black">
            Florencio Dorrance
          </h2>
          <div class="items-center flex flex-row">
            <div class="rounded-full w-3 h-3 bg-green-400"></div>
            <p class="text-xs font-poppins text-gray-500 font-medium pl-2">
              Online
            </p>
          </div>
        </div>
      </div>
      <div>
        <button
          class="flex flex-row items-center bg-purple-100 px-4 py-3 rounded-lg"
        >
          <svg
            width="17"
            height="18"
            viewBox="0 0 17 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.9688 13.0938L15.2188 16.25C15.125 16.7188 14.75 17.0312 14.2812 17.0312C6.40625 17 0 10.5938 0 2.71875C0 2.25 0.28125 1.875 0.75 1.78125L3.90625 1.03125C4.34375 0.9375 4.8125 1.1875 5 1.59375L6.46875 5C6.625 5.40625 6.53125 5.875 6.1875 6.125L4.5 7.5C5.5625 9.65625 7.3125 11.4062 9.5 12.4688L10.875 10.7812C11.125 10.4688 11.5938 10.3438 12 10.5L15.4062 11.9688C15.8125 12.1875 16.0625 12.6562 15.9688 13.0938Z"
              fill="#615EF0"
            />
          </svg>
          <span class="text-purple-primary text-base font-semibold ml-2"
            >Call</span
          >
        </button>
      </div>
    </header>
    <!-- <footer
      class="
        absolute
        left-0
        right-0
        bottom-0
        grid grid-flow-col grid-cols-12
        justify-center
        items-center
        gap-0
        bg-white
        md:hidden
        p-6
      "
    >
      <div class="col-span-1 w-min">
        <button>
          <svg
            width="18"
            height="21"
            viewBox="0 0 18 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="col-span-1"
          >
            <path
              opacity="0.4"
              d="M6.1875 20.5C2.82812 20.5 0.09375 17.7656 0.09375 14.3672C0.09375 12.7266 0.71875 11.1641 1.85156 10.0312L10.0938 1.78906C10.9531 0.96875 12.1641 0.5 13.3359 0.5C16.2656 0.5 17.9062 2.88281 17.9062 5.03125C17.9062 6.24219 17.3984 7.41406 16.5391 8.27344L9 15.8125C8.41406 16.3984 7.63281 16.6719 6.89062 16.6719C4.50781 16.6719 3.88281 14.5625 3.88281 13.7031C3.88281 12.9609 4.19531 12.1797 4.78125 11.5938L10.3281 6.04688C10.5625 5.8125 10.8359 5.73438 11.1094 5.73438C11.6953 5.73438 12.2031 6.20312 12.2031 6.82812C12.2031 7.10156 12.0859 7.375 11.8906 7.60938L6.30469 13.1562C6.14844 13.3125 6.07031 13.5078 6.07031 13.7031C6.07031 14.1719 6.46094 14.5234 6.89062 14.5234C7.08594 14.5234 7.28125 14.4453 7.4375 14.2891L15.0156 6.71094C15.4453 6.24219 15.6797 5.65625 15.6797 5.03125C15.6797 3.9375 14.8594 2.6875 13.3359 2.6875C12.7109 2.6875 12.0859 2.92188 11.6562 3.35156L3.41406 11.5938C2.67188 12.3359 2.28125 13.3125 2.28125 14.3672C2.28125 16.2422 3.64844 18.2734 6.1875 18.2734C7.24219 18.2734 8.25781 17.9219 9 17.1797L15.2109 10.9297C15.4453 10.7344 15.7188 10.6172 15.9922 10.6172C16.5781 10.6172 17.0859 11.0859 17.0859 11.7109C17.0859 11.9844 16.9688 12.2578 16.7734 12.4922L10.5234 18.7031C9.39062 19.875 7.82812 20.5 6.1875 20.5Z"
              fill="black"
            />
          </svg>
        </button>
      </div>
      <div class="col-span-11 flex flex-row items-center">
        <input
          type="text"
          class="
            form-input
            px-5
            py-3
            text-sm
            border-2
            w-full
            border-gray-250
            rounded-xl
            text-black
            font-normal
          "
          placeholder="Type a message"
        />
        <button class="absolute right-0 px-12">
          <svg
            width="22"
            height="21"
            viewBox="0 0 22 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20.9609 1.94531L18.4609 18.1562C18.4219 18.5469 18.1875 18.8984 17.8359 19.0938C17.6406 19.1719 17.4453 19.25 17.2109 19.25C17.0547 19.25 16.8984 19.2109 16.7422 19.1328L11.9766 17.1406L9.98438 20.1094C9.82812 20.3828 9.55469 20.5 9.28125 20.5C8.85156 20.5 8.5 20.1484 8.5 19.7188V15.9688C8.5 15.6562 8.57812 15.3828 8.73438 15.1875L17.25 4.25L5.76562 14.6016L1.74219 12.9219C1.3125 12.7266 1 12.3359 1 11.8281C0.960938 11.2812 1.19531 10.8906 1.625 10.6562L19.125 0.695312C19.5156 0.460938 20.0625 0.460938 20.4531 0.734375C20.8438 1.00781 21.0391 1.47656 20.9609 1.94531Z"
              fill="#615EF0"
            />
          </svg>
        </button>
      </div>
    </footer> -->
    <div class="h-screen p-6 flex overflow-y-auto flex-col gap-8 pb-52">
      <div class="flex flex-row text-left text-black">
        <img
          src="../assets/images/profile1.jpg"
          class="w-10 h-10 rounded-lg float-left"
          alt=""
          srcset=""
        />
        <div class="text-sm gap-2 flex flex-col ml-4 w-80">
          <p class="max-w-max min-w-min px-2.5 py-2 bg-gray-250 rounded-xl">
            omg,this is amazing
          </p>
          <p class="max-w-max min-w-min px-2.5 py-2 bg-gray-250 rounded-xl">
            perfect
          </p>
          <p class="max-w-max min-w-min px-2.5 py-2 bg-gray-250 rounded-xl">
            Wow, this is really epic
          </p>
        </div>
      </div>
      <div class="flex flex-row-reverse text-white">
        <img
          src="../assets/images/profile1.jpg"
          class="w-10 h-10 rounded-lg float-right"
          alt=""
          srcset=""
        />
        <div
          class="
            float-right
            text-sm
            gap-2
            flex flex-col
            items-end
            ml-4
            w-80
            mr-4
          "
        >
          <p
            class="
              text-right
              max-w-max
              min-w-min
              px-2.5
              py-2
              bg-purple-primary
              rounded-xl
            "
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
            repudiandae error id illo porro neque laboriosam ea hic cum et.
          </p>
          <p
            class="
              text-right
              max-w-max
              min-w-min
              px-2.5
              py-2
              bg-purple-primary
              rounded-xl
            "
          >
            Lorem2
          </p>
          <p
            class="
              text-right
              max-w-max
              min-w-min
              px-2.5
              py-2
              bg-purple-primary
              rounded-xl
            "
          >
            Lorem, ipsum dolor.
          </p>
        </div>
      </div>
      <div class="flex flex-row text-left text-black">
        <img
          src="../assets/images/profile1.jpg"
          class="w-10 h-10 rounded-lg float-left"
          alt=""
          srcset=""
        />
        <div class="text-sm gap-2 flex flex-col ml-4 w-80">
          <p class="max-w-max min-w-min px-2.5 py-2 bg-gray-250 rounded-xl">
            omg,this is amazing
          </p>
          <p class="max-w-max min-w-min px-2.5 py-2 bg-gray-250 rounded-xl">
            perfect
          </p>
          <p class="max-w-max min-w-min px-2.5 py-2 bg-gray-250 rounded-xl">
            Wow, this is really epic
          </p>
        </div>
      </div>
      <div class="flex flex-row-reverse text-white">
        <img
          src="../assets/images/profile1.jpg"
          class="w-10 h-10 rounded-lg float-right"
          alt=""
          srcset=""
        />
        <div
          class="
            float-right
            text-sm
            gap-2
            flex flex-col
            items-end
            ml-4
            w-80
            mr-4
          "
        >
          <p
            class="
              text-right
              max-w-max
              min-w-min
              px-2.5
              py-2
              bg-purple-primary
              rounded-xl
            "
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
            repudiandae error id illo porro neque laboriosam ea hic cum et.
          </p>
          <p
            class="
              text-right
              max-w-max
              min-w-min
              px-2.5
              py-2
              bg-purple-primary
              rounded-xl
            "
          >
            Lorem2
          </p>
          <p
            class="
              text-right
              max-w-max
              min-w-min
              px-2.5
              py-2
              bg-purple-primary
              rounded-xl
            "
          >
            Lorem, ipsum dolor.
          </p>
        </div>
      </div>
      <div class="flex flex-row text-left text-black">
        <img
          src="../assets/images/profile1.jpg"
          class="w-10 h-10 rounded-lg float-left"
          alt=""
          srcset=""
        />
        <div class="text-sm gap-2 flex flex-col ml-4 w-80">
          <p class="max-w-max min-w-min px-2.5 py-2 bg-gray-250 rounded-xl">
            omg,this is amazing
          </p>
          <p class="max-w-max min-w-min px-2.5 py-2 bg-gray-250 rounded-xl">
            perfect
          </p>
          <p class="max-w-max min-w-min px-2.5 py-2 bg-gray-250 rounded-xl">
            Wow, this is really epic
          </p>
        </div>
      </div>
      <div class="flex flex-row-reverse text-white">
        <img
          src="../assets/images/profile1.jpg"
          class="w-10 h-10 rounded-lg float-right"
          alt=""
          srcset=""
        />
        <div
          class="
            float-right
            text-sm
            gap-2
            flex flex-col
            items-end
            ml-4
            w-80
            mr-4
          "
        >
          <p
            class="
              text-right
              max-w-max
              min-w-min
              px-2.5
              py-2
              bg-purple-primary
              rounded-xl
            "
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
            repudiandae error id illo porro neque laboriosam ea hic cum et.
          </p>
          <p
            class="
              text-right
              max-w-max
              min-w-min
              px-2.5
              py-2
              bg-purple-primary
              rounded-xl
            "
          >
            Lorem2
          </p>
          <p
            class="
              text-right
              max-w-max
              min-w-min
              px-2.5
              py-2
              bg-purple-primary
              rounded-xl
            "
          >
            Lorem, ipsum dolor.
          </p>
        </div>
      </div>
    </div>
    <footer
      class="
        sticky
        left-0
        right-0
        bottom-0
        grid grid-flow-col grid-cols-12
        justify-center
        items-center
        gap-0
        bg-white
        p-6
      "
    >
      <div class="col-span-1 w-min">
        <button>
          <svg
            width="18"
            height="21"
            viewBox="0 0 18 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="col-span-1"
          >
            <path
              opacity="0.4"
              d="M6.1875 20.5C2.82812 20.5 0.09375 17.7656 0.09375 14.3672C0.09375 12.7266 0.71875 11.1641 1.85156 10.0312L10.0938 1.78906C10.9531 0.96875 12.1641 0.5 13.3359 0.5C16.2656 0.5 17.9062 2.88281 17.9062 5.03125C17.9062 6.24219 17.3984 7.41406 16.5391 8.27344L9 15.8125C8.41406 16.3984 7.63281 16.6719 6.89062 16.6719C4.50781 16.6719 3.88281 14.5625 3.88281 13.7031C3.88281 12.9609 4.19531 12.1797 4.78125 11.5938L10.3281 6.04688C10.5625 5.8125 10.8359 5.73438 11.1094 5.73438C11.6953 5.73438 12.2031 6.20312 12.2031 6.82812C12.2031 7.10156 12.0859 7.375 11.8906 7.60938L6.30469 13.1562C6.14844 13.3125 6.07031 13.5078 6.07031 13.7031C6.07031 14.1719 6.46094 14.5234 6.89062 14.5234C7.08594 14.5234 7.28125 14.4453 7.4375 14.2891L15.0156 6.71094C15.4453 6.24219 15.6797 5.65625 15.6797 5.03125C15.6797 3.9375 14.8594 2.6875 13.3359 2.6875C12.7109 2.6875 12.0859 2.92188 11.6562 3.35156L3.41406 11.5938C2.67188 12.3359 2.28125 13.3125 2.28125 14.3672C2.28125 16.2422 3.64844 18.2734 6.1875 18.2734C7.24219 18.2734 8.25781 17.9219 9 17.1797L15.2109 10.9297C15.4453 10.7344 15.7188 10.6172 15.9922 10.6172C16.5781 10.6172 17.0859 11.0859 17.0859 11.7109C17.0859 11.9844 16.9688 12.2578 16.7734 12.4922L10.5234 18.7031C9.39062 19.875 7.82812 20.5 6.1875 20.5Z"
              fill="black"
            />
          </svg>
        </button>
      </div>
      <div class="col-span-11 flex flex-row items-center">
        <input
          type="text"
          class="
            form-input
            px-5
            py-3
            text-sm
            border-2
            w-full
            border-gray-250
            rounded-xl
            text-black
            font-normal
          "
          placeholder="Type a message"
        />
        <button class="absolute right-0 px-12">
          <svg
            width="22"
            height="21"
            viewBox="0 0 22 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20.9609 1.94531L18.4609 18.1562C18.4219 18.5469 18.1875 18.8984 17.8359 19.0938C17.6406 19.1719 17.4453 19.25 17.2109 19.25C17.0547 19.25 16.8984 19.2109 16.7422 19.1328L11.9766 17.1406L9.98438 20.1094C9.82812 20.3828 9.55469 20.5 9.28125 20.5C8.85156 20.5 8.5 20.1484 8.5 19.7188V15.9688C8.5 15.6562 8.57812 15.3828 8.73438 15.1875L17.25 4.25L5.76562 14.6016L1.74219 12.9219C1.3125 12.7266 1 12.3359 1 11.8281C0.960938 11.2812 1.19531 10.8906 1.625 10.6562L19.125 0.695312C19.5156 0.460938 20.0625 0.460938 20.4531 0.734375C20.8438 1.00781 21.0391 1.47656 20.9609 1.94531Z"
              fill="#615EF0"
            />
          </svg>
        </button>
      </div>
    </footer>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>
