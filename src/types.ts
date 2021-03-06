export type PluginConfig = ClientConfig & {
  /**
   * the mode to upload files
   * zip mode need install 'unzip' on remote server
   * @default file
   */
  mode?: 'file' | 'zip'
  /**
   * remote dir
   */
  remotePath: string
  /**
   * enable backup the remote to local
   * @default false
   */
  backup?: boolean
  /**
   * url to preview after deploy
   */
  previewPath?: string
  /**
   * remove local zip after deploy
   * only use in zip mode
   * @default true
   */
  removeLocalZip?: boolean
}

export interface ClientConfig {
  host: string
  /**
   * @default 22
   */
  port?: number
  username: string
  password: string
}
