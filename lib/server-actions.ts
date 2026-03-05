// "use server";

// import { z } from "zod";
// import { BookReservationSchema } from "@/schemas";
// import {
//   BookReservationActionState,
//   BookReservationFormData,
// } from "@/types/forms";

// export const bookReservation = async (
//   _prevState: BookReservationActionState,
//   formData: FormData
// ): Promise<BookReservationActionState> => {
//   const bookReservationData = Object.fromEntries(formData) as unknown as BookReservationFormData;

//   try {
//     const validated = BookReservationSchema.safeParse(bookReservationData);

//     if (!validated.success) {
//       // ✅ use new treeifyError API
//       const structuredError = z.treeifyError(validated.error);

//       return {
//         data: { ...bookReservationData },
//         success: false,
//         errors: structuredError, // structured tree of validation errors
//       };
//     }

//     // ✅ If successful
//     return {
//       message: "Reservation successful!",
//       errors: null,
//       success: true,
//     };
//   } catch (error) {
//     console.error("❌ Error saving reservation:", error);
//     return {
//       data: { ...bookReservationData },
//       success: false,
//       errors: { errors: ["An unexpected error occurred."] },
//     };
//   }
// };
