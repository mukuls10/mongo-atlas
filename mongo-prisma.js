const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function createStudentEntry(name, totalMarks, favSubject) {
  try {
    console.log(name, totalMarks, favSubject);
    await prisma.student.create({
      data: {
        name: name,
        totalMarks: totalMarks,
        favSubject: favSubject,
      },
    });
  } catch (error) {
    console.error("Failed to create student in db, ", error);
  }
}

createStudentEntry("Mukul", 495, "Maths");
