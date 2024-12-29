export default function Home() {

  const links = [
    "GitHub",
    "Frontend Mentor",
    "LinkedIn",
    "Twitter",
    "Instagram"
  ];

  return (
    <div role="region" class="flex flex-col bg-grey-800 w-[350px] h-fit rounded-md p-8 items-center gap-6">
      <div role="section" class="flex flex-col items-center">
        <img src="/avatar-jessica.jpeg" alt="Jessica avatar" class="rounded-full aspect-square w-2/5 mb-4"/>
        <h1 class="font-sans font-semibold text-white tracking-wide text-xl mb-1">Jessica Randall</h1>
        <p class="text-green font-sans text-xs">London, United Kingdom</p>
      </div>
      <p class="font-sans text-base text-grey-500">"Front-end developer and avid reader."</p>
      <div class="flex flex-col items-center w-full gap-4">
        {links.map(l => _SocialLink(l))}
      </div>
    </div>
  );
}

function _SocialLink(link: string) {
  return (
    <button class="font-sans text-base font-semibold text-center rounded-md text-white bg-grey-700 p-3 w-full select-none hover:text-grey-900 hover:bg-green">{link}</button>
  );
}