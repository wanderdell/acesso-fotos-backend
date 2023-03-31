-- AlterTable
ALTER TABLE "RecordAlbum" ALTER COLUMN "id" DROP DEFAULT;
DROP SEQUENCE "RecordAlbum_id_seq";

-- AlterTable
ALTER TABLE "RecordAlbumPhoto" ALTER COLUMN "id" DROP DEFAULT;
DROP SEQUENCE "RecordAlbumPhoto_id_seq";

-- AlterTable
ALTER TABLE "TabMenu" ALTER COLUMN "id" DROP DEFAULT;
DROP SEQUENCE "TabMenu_id_seq";

-- AlterTable
ALTER TABLE "UserRegistration" ALTER COLUMN "id" DROP DEFAULT;
DROP SEQUENCE "UserRegistration_id_seq";
