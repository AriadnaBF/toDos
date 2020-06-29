function ToDo(id, title, complete) {
  this.id = id;
  this.title = title;
  this.complete = complete;
  this.description = "";
}

ToDo.prototype.setUppercase = function () {
  const uppercase = this.title.toUpperCase();
  return uppercase;
};

export { ToDo };
