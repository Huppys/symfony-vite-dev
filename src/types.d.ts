// declare module 'rollup' {
//   export interface RenderedChunk {
//     viteMetadata: ChunkMetadata
//   }
// }

type WithRequiredProperty<Type, Key extends keyof Type> = Type & {
  [Property in Key]-?: Type[Property];
};

interface ChunkMetadata {
  importedAssets: Set<string>;
  importedCss: Set<string>;
}

type EntryPointsFile = {
  isProd: boolean;
  viteServer:
    | {
        origin: string;
        base: string;
      }
    | false;
  entryPoints: EntryPoints;
  assets: StringMapping;
  legacy: boolean;
};

type EntryPoint = {
  js?: string[];
  css?: string[];
  preload?: string[];
  legacy?: boolean | string;
};
type EntryPoints = {
  [k: string]: EntryPoint;
};

type StringMapping = {
  [k: string]: string;
};

type ParsedInputs = {
  [k: string]: ParsedEntry;
};

type ParsedEntry = {
  inputType: "js" | "css";
  inputRelPath: string;
};

type EntryFilesMapping = {
  [k: string]: string;
};

type ManifestEntry = {
  file: string;
  src?: string;
  isEntry?: boolean;
  imports?: string[];
  css?: string[];
};

type Manifest = {
  [k: string]: ManifestEntry;
};

type FileInfos = {
  type: "js" | "css" | "asset";
  outputRelPath: string;
  inputRelPath: string | null;

  css: string[];
  imports: string[];
  preload: string[];
};

type GeneratedFiles = {
  [inputRelPath: string]: FileInfos;
};

type DevServerUrl = `${"http" | "https"}://${string}:${number}`;

type PluginOptions = {
  /**
   * Serve your assets which are defined in your public directory
   * @default true
   */
  servePublic?: boolean;

  /**
   * Symfony's public directory
   * @default 'public'
   */
  publicDirectory?: string;

  /**
   * The build directory relative to publicDirectory where compiled assets should be written
   * @default 'build'
   */
  buildDirectory?: string;

  /**
   * Configuration for performing full page refresh on file changes
   * @default false
   */
  refresh?: boolean | string[];

  /**
   * If you set server.host: '0.0.0.0' in your vite.config.js
   * you have to set 'localhost'
   * @default null
   */
  viteDevServerHostname?: string;

  /**
   * Show vite resolved config
   * @default false
   */
  verbose?: boolean;
};
