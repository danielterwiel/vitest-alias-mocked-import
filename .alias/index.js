function aliasedMockFunction() {
  console.log("aliasedMockFunction has been executed");
  window.fetch("/do/not/fetch/this");
  return "aliasedMockFunction";
}

export { aliasedMockFunction };
