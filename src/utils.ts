export default class Utils {
  public static decodeBase64ObjectKeys = (
    object: { [key: string]: any } | Array<string>
  ) => {
    if (object instanceof Array) {
      return object.map((value) => atob(value));
    }

    if (object instanceof Object) {
      for (let key in object) {
        if (object[key] instanceof Array) {
          object[key] = this.decodeBase64ObjectKeys(object[key]);
        }

        object[key] = atob(object[key]);
      }
    }

    return object;
  };
}
