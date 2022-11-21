import { z, TypeOf } from 'zod';


export const movieSchema = z.object({
    body: z.object({
        id: z
        .string ({ required_error: 'ID is required !' })
        .min(3, 'Your id must be more than 3 characters'),
        name: z
        .string({required_error: 'name is required !'})
        .min(3, 'Your name must be more than 3 characters'),
        genre: z
        .enum(['Drama', 'Action', 'Comedy'], 
        { required_error: 'genre of movie is required !' }),
        rating: z
        .number({required_error: 'rating is required !'})
        .gte(1)
        .lte(5),
        duration: z
        .number({required_error: 'duration time is required !'})
        .gte(60)
        .lte(500),
    }),
});
export type movieSchemaType = TypeOf<typeof movieSchema>['body'];