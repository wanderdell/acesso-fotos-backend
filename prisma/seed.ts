import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const user = await prisma.userRegistration.upsert({
    where: { cod_user_usr: 1 },
    update: {},
    create: {
      cod_user_usr: 1,
      cod_email_usr: 'contato@email.com',
      cod_login_usr: 'YanDev',
      cod_situ_usr: 1,
      des_user_usr: 'YanDev',
      id_admin_usr: 1,
      num_fone_usr: '11999999999',
      usr_ins_usr: 1,
      usr_upd_usr: 'YanDev',
      dta_ins_usr: new Date(),
      cod_cliente: 1,
    },
  });

  const menu = await prisma.tabMenu.upsert({
    where: { cod_menu_men: 1 },
    update: {},
    create: {
      cod_menu_men: 1,
      des_menu_men: 'Photos',
      cod_cliente: 1,
    },
  });

  const user_menu = await prisma.userMenuRelationship.upsert({
    where: { cod_rum_rum: 1 },
    update: {},
    create: {
      cod_rum_rum: 1,
      cod_user_rum: 1,
      cod_menu_rum: 1,
      cod_cliente: 1,
    },
  });

  const contract = await prisma.customerContract.upsert({
    where: { cod_cont_con: 1 },
    update: {},
    create: {
      cod_cont_con: 1,
      cod_user_con: 1,
      dta_evento_con: new Date(),
      dta_entrega_con: new Date(),
      obs_cont_con: 'asdasdasd',
      cod_anexo_con: 1,
      des_local_con: 'RUA FARIA LIMA',
      cod_cliente_cli: 1,
    },
  });

  const log = await prisma.logs.upsert({
    where: { cod_log_log: 1 },
    update: {},
    create: {
      cod_log_log: 1,
      cod_user_log: 1,
      cod_tipo_log: 1,
      dta_log_log: new Date(),
    },
  });

  const photos = await prisma.recordPhoto.upsert({
    where: { cod_foto_caf: 1 },
    update: {},
    create: {
      cod_foto_caf: 1,
      cod_album_caf: 1,
      des_foto_caf: 'Foto de teste',
      tip_foto_caf: '100px',
      largura_caf: 1,
      altura_caf: 1,
      tamanho_caf: 123123,
      ordem_caf: 1,
      dta_foto_caf: new Date(),
      cod_lati_caf: '123',
      cod_long_caf: '123',
      cod_cliente: 1,
      contract_id: 1,
    },
  });

  const album = await prisma.recordAlbum.upsert({
    where: { cod_album_alb: 1 },
    update: {},
    create: {
      cod_album_alb: 1,
      des_album_alb: 'Album de teste',
      obs_album_alb: 'Observação de teste',
      dta_evento_alb: new Date(),
      album_id: 1,
      contract_id: 1,
      cod_situ_alb: 1,
      cod_cliente: 1,
    },
  });
}

main()
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
