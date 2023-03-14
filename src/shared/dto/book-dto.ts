import { AuthorDto } from './author-dto';
import { RatingDto } from './rating-dto';

export interface BookDto {
  creationDate: string;
  id: number;
  name: string;
  ratingsDto: RatingDto[];
  authorDto: AuthorDto;
}
