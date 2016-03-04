export default function path(...resources: string[]): string {
  return resources.reduce((path: string, resource: string) => `${path}/${resource}`);
}
