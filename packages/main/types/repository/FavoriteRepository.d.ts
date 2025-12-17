import { Favorite } from "../entity/Favorite.ts";
import TypeORM from "../vendor/TypeORM.ts";
export default class FavoriteRepository {
    private readonly db;
    constructor(db: TypeORM);
    findFavorites(): Promise<Favorite[]>;
    addFavorite(favorite: Favorite): Promise<Favorite>;
    removeFavorite(id: number): Promise<void>;
    importFavorites(favorites: Favorite[]): Promise<void>;
}
