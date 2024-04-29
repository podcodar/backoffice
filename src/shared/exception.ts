export function raise(msg = 'An error occured', Err = Error): never {
  throw new Err(msg);
}
