import { WebpackPluginInstance, ProgressPlugin, HotModuleReplacementPlugin, DefinePlugin } from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin'
import type { BuildOptions } from './types/config';

export function buildPlugins({ paths, isDev }: BuildOptions): WebpackPluginInstance[] {
  return [
    new HtmlWebpackPlugin({
      template: paths.html,
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].css',
    }),
    new ProgressPlugin(),
    new DefinePlugin({
      __IS_DEV__: JSON.stringify(isDev),
    }),
    isDev && new ReactRefreshWebpackPlugin()
  ].filter(Boolean)
}
