-- CreateTable
CREATE TABLE "UserRegistration" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "password_usr" TEXT NOT NULL,
    "createdAt_usr" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt_sr" TIMESTAMP(3) NOT NULL,
    "user_id" INTEGER NOT NULL,

    CONSTRAINT "UserRegistration_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TabMenu" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "user_id" INTEGER NOT NULL,

    CONSTRAINT "TabMenu_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CustomerContract" (
    "id" SERIAL NOT NULL,
    "client" TEXT NOT NULL,
    "event_date" TIMESTAMP(3) NOT NULL,
    "delivey_date" TIMESTAMP(3) NOT NULL,
    "id_anexo" TEXT NOT NULL,
    "event_place" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "user_id" INTEGER NOT NULL,

    CONSTRAINT "CustomerContract_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Logs" (
    "id" SERIAL NOT NULL,
    "user_log" TEXT NOT NULL,
    "type_log" TEXT NOT NULL,
    "user_id" INTEGER NOT NULL,

    CONSTRAINT "Logs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RecordAlbumPhoto" (
    "id" SERIAL NOT NULL,
    "photo_id" INTEGER NOT NULL,
    "photo_desc" TEXT NOT NULL,
    "photo_widh" TEXT NOT NULL,
    "photo_height" TEXT NOT NULL,
    "photo_size" TEXT NOT NULL,
    "photo_order" TEXT NOT NULL,
    "photo_Date" TIMESTAMP(3) NOT NULL,
    "photo_lat" TEXT NOT NULL,
    "photo_long" TEXT NOT NULL,
    "user_id" INTEGER NOT NULL,

    CONSTRAINT "RecordAlbumPhoto_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RecordAlbum" (
    "id" SERIAL NOT NULL,
    "description" TEXT NOT NULL,
    "observation" TEXT NOT NULL,
    "delivey_date" TIMESTAMP(3) NOT NULL,
    "album_date" TIMESTAMP(3) NOT NULL,
    "situation" INTEGER NOT NULL,
    "user_id" INTEGER NOT NULL,
    "album_id" INTEGER NOT NULL,

    CONSTRAINT "RecordAlbum_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "UserRegistration_email_key" ON "UserRegistration"("email");

-- AddForeignKey
ALTER TABLE "TabMenu" ADD CONSTRAINT "TabMenu_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "UserRegistration"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CustomerContract" ADD CONSTRAINT "CustomerContract_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "UserRegistration"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Logs" ADD CONSTRAINT "Logs_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "UserRegistration"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RecordAlbumPhoto" ADD CONSTRAINT "RecordAlbumPhoto_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "UserRegistration"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RecordAlbum" ADD CONSTRAINT "RecordAlbum_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "UserRegistration"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RecordAlbum" ADD CONSTRAINT "RecordAlbum_album_id_fkey" FOREIGN KEY ("album_id") REFERENCES "RecordAlbumPhoto"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
