/* jshint esversion:9 */

function createBlocks(data) {
  const div = document.createElement("div");
  div.classList.add(
    "flex",
    "flex-col",
    "items-center",
    "bg-white",
    "border",
    "border-gray-200",
    "rounded-lg",
    "shadow",
    "md:flex-row",
    "md:max-w-xl",
    "hover:bg-gray-100"
  );

  const img = document.createElement("img");
  img.classList.add(
    "object-cover",
    "w-full",
    "rounded-t-lg",
    "h-96",
    "md:h-auto",
    "md:w-48",
    "md:rounded-none",
    "md:rounded-l-lg"
  );
  img.src = data.poster;
  img.alt = data.title;

  const innerDiv = document.createElement("div");
  innerDiv.classList.add(
    "flex",
    "flex-col",
    "justify-between",
    "p-4",
    "leading-normal"
  );

  const h5 = document.createElement("h5");
  h5.classList.add(
    "mb-2",
    "text-2xl",
    "font-bold",
    "tracking-tight",
    "text-gray-900"
  );
  h5.textContent = data.title;

  const p1 = document.createElement("p");
  p1.classList.add("mb-3", "font-normal", "text-gray-700");
  p1.textContent =
    data.overview.length > 200
      ? data.overview.slice(0, 200) + "..."
      : data.overview;

  const p2 = document.createElement("p");
  p2.classList.add("text-sm", "mt-3");

  const span = document.createElement("span");
  span.classList.add("font-medium", "text-gray-900");
  span.textContent = new Date(data.release_date).toLocaleDateString();

  p2.appendChild(document.createTextNode("Release Date: "));
  p2.appendChild(span);

  innerDiv.appendChild(h5);
  innerDiv.appendChild(p1);
  innerDiv.appendChild(p2);

  div.appendChild(img);
  div.appendChild(innerDiv);

  document.getElementById("movieGrid").appendChild(div);
}

window.addEventListener("load", () => {
  movies.forEach((movie) => {
    createBlocks(movie);
  });
});
