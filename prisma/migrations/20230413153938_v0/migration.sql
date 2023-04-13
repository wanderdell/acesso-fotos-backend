-- CreateTable
CREATE TABLE "UserRegistration" (
    "cod_user_usr" INTEGER NOT NULL,
    "cod_login_usr" TEXT NOT NULL,
    "des_user_usr" TEXT NOT NULL,
    "cod_email_usr" TEXT NOT NULL,
    "num_fone_usr" TEXT NOT NULL,
    "cod_situ_usr" INTEGER NOT NULL,
    "usr_ins_usr" INTEGER NOT NULL,
    "dta_ins_usr" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "usr_upd_usr" TEXT NOT NULL,
    "dta_upd_usr" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "cod_cliente" INTEGER NOT NULL,
    "id_admin_usr" INTEGER NOT NULL,

    CONSTRAINT "UserRegistration_pkey" PRIMARY KEY ("cod_user_usr")
);

-- CreateTable
CREATE TABLE "ClientRegister" (
    "cod_cliente_cli" INTEGER NOT NULL,
    "cod_login_cli" TEXT NOT NULL,
    "nom_cliente_cli" TEXT NOT NULL,
    "cod_email_cli" TEXT NOT NULL,
    "num_fone_cli" TEXT NOT NULL,
    "cod_situ_cli" INTEGER NOT NULL,
    "usr_ins_cli" INTEGER NOT NULL,
    "dta_ins_cli" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "usr_upd_cli" INTEGER NOT NULL,
    "dta_upd_cli" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ClientRegister_pkey" PRIMARY KEY ("cod_cliente_cli")
);

-- CreateTable
CREATE TABLE "TabMenu" (
    "cod_menu_men" INTEGER NOT NULL,
    "des_menu_men" TEXT NOT NULL,
    "cod_cliente" INTEGER NOT NULL,

    CONSTRAINT "TabMenu_pkey" PRIMARY KEY ("cod_menu_men")
);

-- CreateTable
CREATE TABLE "UserMenuRelationship" (
    "cod_rum_rum" SERIAL NOT NULL,
    "cod_user_rum" INTEGER NOT NULL,
    "cod_menu_rum" INTEGER NOT NULL,
    "cod_cliente" INTEGER NOT NULL,

    CONSTRAINT "UserMenuRelationship_pkey" PRIMARY KEY ("cod_rum_rum")
);

-- CreateTable
CREATE TABLE "UserAlbumRelationship" (
    "cod_rum_rua" SERIAL NOT NULL,
    "cod_user_rua" INTEGER NOT NULL,
    "cod_album_alb" INTEGER NOT NULL,
    "cod_cliente" INTEGER NOT NULL,
    "cod_usuario" INTEGER NOT NULL,

    CONSTRAINT "UserAlbumRelationship_pkey" PRIMARY KEY ("cod_rum_rua")
);

-- CreateTable
CREATE TABLE "CustomerContract" (
    "cod_cont_con" SERIAL NOT NULL,
    "cod_user_con" INTEGER NOT NULL,
    "dta_evento_con" TIMESTAMP(3) NOT NULL,
    "dta_entrega_con" TIMESTAMP(3) NOT NULL,
    "obs_cont_con" TEXT NOT NULL,
    "cod_anexo_con" INTEGER NOT NULL,
    "des_local_con" TEXT NOT NULL,
    "cod_cliente_cli" INTEGER NOT NULL,

    CONSTRAINT "CustomerContract_pkey" PRIMARY KEY ("cod_cont_con")
);

-- CreateTable
CREATE TABLE "Logs" (
    "cod_log_log" SERIAL NOT NULL,
    "cod_user_log" INTEGER NOT NULL,
    "cod_tipo_log" INTEGER NOT NULL,
    "dta_log_log" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Logs_pkey" PRIMARY KEY ("cod_log_log")
);

-- CreateTable
CREATE TABLE "RecordPhoto" (
    "cod_foto_caf" INTEGER NOT NULL,
    "cod_album_caf" INTEGER NOT NULL,
    "des_foto_caf" TEXT NOT NULL,
    "tip_foto_caf" TEXT NOT NULL,
    "largura_caf" INTEGER NOT NULL,
    "altura_caf" INTEGER NOT NULL,
    "tamanho_caf" BIGINT NOT NULL,
    "ordem_caf" INTEGER NOT NULL,
    "dta_foto_caf" TIMESTAMP(3) NOT NULL,
    "cod_lati_caf" TEXT NOT NULL,
    "cod_long_caf" TEXT NOT NULL,
    "cod_cliente" INTEGER NOT NULL,
    "contract_id" INTEGER NOT NULL,

    CONSTRAINT "RecordPhoto_pkey" PRIMARY KEY ("cod_foto_caf")
);

-- CreateTable
CREATE TABLE "RecordAlbum" (
    "cod_album_alb" INTEGER NOT NULL,
    "des_album_alb" TEXT NOT NULL,
    "obs_album_alb" TEXT NOT NULL,
    "dta_evento_alb" TIMESTAMP(3) NOT NULL,
    "cod_situ_alb" INTEGER NOT NULL,
    "cod_cliente" INTEGER NOT NULL,
    "album_id" INTEGER NOT NULL,
    "contract_id" INTEGER NOT NULL,

    CONSTRAINT "RecordAlbum_pkey" PRIMARY KEY ("cod_album_alb")
);

-- CreateTable
CREATE TABLE "Situation" (
    "id_situ_situ" INTEGER NOT NULL,
    "desc_situ_sit" TEXT NOT NULL,
    "suf_situ_situ" TEXT NOT NULL,

    CONSTRAINT "Situation_pkey" PRIMARY KEY ("id_situ_situ")
);

-- CreateIndex
CREATE UNIQUE INDEX "UserRegistration_cod_email_usr_key" ON "UserRegistration"("cod_email_usr");

-- AddForeignKey
ALTER TABLE "ClientRegister" ADD CONSTRAINT "ClientRegister_usr_ins_cli_fkey" FOREIGN KEY ("usr_ins_cli") REFERENCES "UserRegistration"("cod_user_usr") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TabMenu" ADD CONSTRAINT "TabMenu_cod_cliente_fkey" FOREIGN KEY ("cod_cliente") REFERENCES "UserRegistration"("cod_user_usr") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserMenuRelationship" ADD CONSTRAINT "UserMenuRelationship_cod_cliente_fkey" FOREIGN KEY ("cod_cliente") REFERENCES "ClientRegister"("cod_cliente_cli") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserMenuRelationship" ADD CONSTRAINT "UserMenuRelationship_cod_menu_rum_fkey" FOREIGN KEY ("cod_menu_rum") REFERENCES "TabMenu"("cod_menu_men") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserAlbumRelationship" ADD CONSTRAINT "UserAlbumRelationship_cod_cliente_fkey" FOREIGN KEY ("cod_cliente") REFERENCES "ClientRegister"("cod_cliente_cli") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserAlbumRelationship" ADD CONSTRAINT "UserAlbumRelationship_cod_usuario_fkey" FOREIGN KEY ("cod_usuario") REFERENCES "UserRegistration"("cod_user_usr") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CustomerContract" ADD CONSTRAINT "CustomerContract_cod_user_con_fkey" FOREIGN KEY ("cod_user_con") REFERENCES "UserRegistration"("cod_user_usr") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CustomerContract" ADD CONSTRAINT "CustomerContract_cod_cliente_cli_fkey" FOREIGN KEY ("cod_cliente_cli") REFERENCES "ClientRegister"("cod_cliente_cli") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Logs" ADD CONSTRAINT "Logs_cod_log_log_fkey" FOREIGN KEY ("cod_log_log") REFERENCES "UserRegistration"("cod_user_usr") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RecordPhoto" ADD CONSTRAINT "RecordPhoto_cod_cliente_fkey" FOREIGN KEY ("cod_cliente") REFERENCES "UserRegistration"("cod_user_usr") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RecordPhoto" ADD CONSTRAINT "RecordPhoto_contract_id_fkey" FOREIGN KEY ("contract_id") REFERENCES "CustomerContract"("cod_cont_con") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RecordAlbum" ADD CONSTRAINT "RecordAlbum_cod_cliente_fkey" FOREIGN KEY ("cod_cliente") REFERENCES "UserRegistration"("cod_user_usr") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RecordAlbum" ADD CONSTRAINT "RecordAlbum_album_id_fkey" FOREIGN KEY ("album_id") REFERENCES "RecordPhoto"("cod_foto_caf") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RecordAlbum" ADD CONSTRAINT "RecordAlbum_contract_id_fkey" FOREIGN KEY ("contract_id") REFERENCES "CustomerContract"("cod_cont_con") ON DELETE RESTRICT ON UPDATE CASCADE;
