import { PrismaClient } from '@prisma/client';
import { async } from 'rxjs';

const prisma = new PrismaClient();

async function main() {
  const user = await prisma.userRegistration.upsert({
    where: { email: 'contato@yandev.com' },
    update: {},
    create: {
      id: 1,
      email: 'contato@yandev.com',
      password_usr: '123456',
      createdAt_usr: new Date(),
      updatedAt_usr: new Date(),
    },
  });

  const menu = await prisma.tabMenu.upsert({
    where: { id: 1 },
    update: {},
    create: {
      id: 1,
      name: 'Photos',
      description: '',
      createdAt: new Date(),
      updatedAt: new Date(),
      user_id: 1,
    },
  });

  const contract = await prisma.customerContract.upsert({
    where: { id: 1 },
    update: {},
    create: {
      id: 1,
      client: 'YanDev',
      event_date: new Date(),
      delivey_date: new Date(),
      id_anexo: 1,
      event_place: 'São Paulo',
      createdAt: new Date(),
      updatedAt: new Date(),
      user_id: 1,
    },
  });

  const log = await prisma.logs.upsert({
    where: { id: 1 },
    update: {},
    create: {
      id: 1,
      user_log: 'YanDev',
      type_log: 'Login',
      user_id: 1,
    },
  });

  const photo = await prisma.recordAlbumPhoto.upsert({
    where: { id: 1 },
    update: {},
    create: {
      id: 1,
      photo_id: 1,
      photo_desc: 'Foto de teste',
      photo_widh: '100px',
      photo_height: '100px',
      photo_size: '100gb',
      photo_order: '1',
      photo_Date: new Date(),
      photo_lat: '123',
      photo_long: '123',
      user_id: 1,
    },
  });

  const album = await prisma.recordAlbum.upsert({
    where: { id: 1 },
    update: {},
    create: {
      id: 1,
      description: 'Album de teste',
      observation: 'Observação de teste',
      delivey_date: new Date(),
      album_date: new Date(),
      situation: 1,
      user_id: 1,
      album_id: 1,
    },
  });

  console.log({ user, menu, contract, log, photo, album });
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
