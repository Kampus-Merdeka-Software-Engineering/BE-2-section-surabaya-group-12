/*
  Warnings:

  - You are about to alter the column `about_fullname` on the `about` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(50)`.
  - You are about to alter the column `about_position` on the `about` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(50)`.
  - You are about to alter the column `contact_fullname` on the `contact` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(50)`.
  - You are about to alter the column `contact_email` on the `contact` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(50)`.
  - You are about to alter the column `customer_name` on the `customer` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(50)`.
  - You are about to alter the column `room_type` on the `room` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(50)`.
  - You are about to alter the column `room_price` on the `room` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(50)`.

*/
-- AlterTable
ALTER TABLE `about` MODIFY `about_fullname` VARCHAR(50) NOT NULL,
    MODIFY `about_position` VARCHAR(50) NOT NULL;

-- AlterTable
ALTER TABLE `contact` MODIFY `contact_fullname` VARCHAR(50) NOT NULL,
    MODIFY `contact_email` VARCHAR(50) NOT NULL,
    MODIFY `contact_phone` BIGINT NOT NULL,
    MODIFY `contact_message` VARCHAR(500) NOT NULL;

-- AlterTable
ALTER TABLE `customer` MODIFY `customer_name` VARCHAR(50) NOT NULL,
    MODIFY `customer_description` VARCHAR(500) NOT NULL;

-- AlterTable
ALTER TABLE `room` MODIFY `room_type` VARCHAR(50) NOT NULL,
    MODIFY `room_price` VARCHAR(50) NOT NULL;
