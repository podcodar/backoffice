export function raise(msg?: string): never {
  throw new Error(msg ?? 'An error occured');
}

export async function generateUUID() {
  const uuid = await import('uuid');
  return uuid.v1.generate().toString();
}

export async function validateUUID(input: string) {
  const uuid = await import('uuid');
  return uuid.v1.validate(input);
}
