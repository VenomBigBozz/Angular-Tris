package com.tris.api.model

import javax.persistence.Entity
import javax.persistence.GeneratedValue
import javax.persistence.GenerationType
import javax.persistence.Id
import javax.validation.constraints.NotBlank
import java.time.LocalDate

@Entity
data class Match (
    @Id @GeneratedValue(strategy = GenerationType.AUTO)
    val id: Long = 0,

    @get: NotBlank
    val winner: String = "",

    @get: NotBlank
    val match_date: LocalDate = LocalDate.now()

)
