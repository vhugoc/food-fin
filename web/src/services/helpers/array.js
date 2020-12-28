class ArrayHelper {
  getElementById(id, array) {
    const index = this.getElementIndexById(id, array);
    return array[index];
  }
  getElementIndexById(id, array) {
    const index = array.findIndex(item => item.id === id);
    return index;
  }
}

export default new ArrayHelper;
