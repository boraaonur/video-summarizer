export function timeout(delay: number) {
  return new Promise((res) => setTimeout(res, delay));
}

export function setDisplayStyle(selector: string, action: "show" | "hide") {
  const element = document.querySelector(selector) as HTMLElement;

  if (element) {
    if (action === "show") {
      element.style.display = "block";
    } else {
      element.style.display = "none";
    }
  }
}
