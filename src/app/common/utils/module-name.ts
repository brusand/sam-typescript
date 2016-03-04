export default function moduleName(...modules: string[]): string {
    return modules.reduce((moduleName: string, module: string) => `${moduleName}.${module}`);
}
