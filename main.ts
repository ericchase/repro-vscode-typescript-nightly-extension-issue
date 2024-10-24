let stdin_next = Defer<string>();
new StdinTextReader().addHandler(async (text) => {
  stdin_next.resolve(text.trim());
  stdin_next = Defer<string>();
});
