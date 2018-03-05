import { InfoModel } from './InfoModel';
import { CommentModel } from './CommentModel';

export class ArticleModel {
    _id: string;
    title: string;
    descritpion: string;
    body: string;
    info: InfoModel;
    isHidden: boolean;

    comments: CommentModel[];
}
