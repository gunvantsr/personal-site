export interface IFrontMatterDto {
  title?: string;
  date?: string;
  description?: string;
  thumbnail?: string;
}

export interface IPostDto {
  frontMatter: IFrontMatterDto;
  slug: string;
}

export interface IGetPostPropsDto {
  props: IPostDto[];
}

export interface IGetPostsData {
  props: IGetPostPropsDto;
}
