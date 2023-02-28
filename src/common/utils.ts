export function addParamToExistsSearchParams(key: string, value: string): URLSearchParams {
  const params = new URLSearchParams(window.location.search);

  params.set(key, value);

  return params;
}

export function deleteParamFromExistsSearchParams(value: string): URLSearchParams {
  const params = new URLSearchParams(window.location.search);

  params.delete(value);

  return params;
}

export function classNames(classes: Record<string, boolean> = {}): string {
  return Object.keys(classes)
    .filter((className) => !!classes[className])
    .join(' ');
}
