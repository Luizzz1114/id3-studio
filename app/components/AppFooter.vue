<template>
  <footer class="bg-default mt-auto flex w-full flex-col border-t-2">
    <div class="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-6 px-4 py-8 sm:flex-row sm:px-6 lg:px-8">
      <div class="flex flex-col items-center gap-3 sm:items-start">
        <NuxtLink
          to="/"
          class="flex items-center gap-3 transition-opacity hover:opacity-90"
        >
          <div class="shadow-3d grid size-7 place-items-center border-2 bg-indigo-500 p-0.5">
            <img
              src="/favicon.svg"
              alt=""
              aria-hidden="true"
              width="24"
              height="24"
            />
          </div>
          <span class="font-silkscreen  text-xl font-bold uppercase">ID3 Studio</span>
        </NuxtLink>
        <div class="flex items-center gap-2 text-xs font-medium text-neutral-500 dark:text-neutral-400">
          <span class="size-2 animate-pulse rounded-full bg-green-500"></span>
          Motor en línea / v1.0
        </div>
      </div>
      <nav class="flex flex-col flex-wrap justify-center gap-2 text-sm font-bold text-neutral-500 uppercase dark:text-neutral-400">
        <a
          href="https://github.com/Luizzz1114/id3-studio"
          target="_black"
          class="border-b-2 border-neutral-200 pb-0.5 transition-colors hover:text-indigo-500 dark:border-neutral-800"
        >
          Código Fuente
        </a>
        <a
          href="https://github.com/Luizzz1114/id3-studio/issues"
          target="_blank"
          class="border-b-2 border-neutral-200 pb-0.5 transition-colors hover:text-indigo-500 dark:border-neutral-800"
        >
          Reportar Bug
        </a>
      </nav>
    </div>
    <div class="border-t-2 border-neutral-200 bg-neutral-100 dark:border-neutral-700 dark:bg-neutral-800">
      <div class="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-4 px-4 py-4 sm:flex-row sm:px-6 lg:px-8">
        <p class="text-sm font-bold tracking-widest text-neutral-600 uppercase dark:text-neutral-300">
          Hecho por <span class="text-indigo-500 dark:text-indigo-400">Luis Cortesia</span>, <time datetime="2026">2026</time>.
        </p>
        <div class="flex items-center gap-5">
          <a
            href="https://github.com/Luizzz1114"
            target="_blank"
            aria-label="GitHub"
            class="text-neutral-500 transition-colors hover:text-indigo-600 dark:text-neutral-400 dark:hover:text-indigo-400"
          >
            <UIcon
              name="i-simple-icons-github"
              class="size-5"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/luis-cortesia/"
            target="_blank"
            aria-label="LinkedIn"
            class="text-neutral-500 transition-colors hover:text-indigo-600 dark:text-neutral-400 dark:hover:text-indigo-400"
          >
            <UIcon
              name="i-simple-icons-linkedin"
              class="size-5"
            />
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>
