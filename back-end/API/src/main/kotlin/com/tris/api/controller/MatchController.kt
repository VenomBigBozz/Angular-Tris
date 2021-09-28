package com.tris.api.controller

import com.tris.api.model.Match
import com.tris.api.repository.MatchRepository
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*
import javax.validation.Valid

@RestController
@RequestMapping("/api")
class MatchController(private val matchRepository: MatchRepository) {

    @GetMapping("/matches")
    fun getAllMatches(): List<Match> =
        matchRepository.findAll()


    @PostMapping("/matches")
    fun createNewMatch(@Valid @RequestBody match: Match): Match =
        matchRepository.save(match)


    @GetMapping("/matches/{id}")
    fun getMatchById(@PathVariable(value = "id") matchId: Long): ResponseEntity<Match> {
        return matchRepository.findById(matchId).map { match ->
            ResponseEntity.ok(match)
        }.orElse(ResponseEntity.notFound().build())
    }

    @PutMapping("/matches/{id}")
    fun updateMatchById(@PathVariable(value = "id") matchId: Long,
                          @Valid @RequestBody newMatch: Match): ResponseEntity<Match> {

        return matchRepository.findById(matchId).map { existingMatch ->
            val updatedMatch: Match = existingMatch
                .copy(winner = newMatch.winner, match_date = newMatch.match_date)
            ResponseEntity.ok().body(matchRepository.save(updatedMatch))
        }.orElse(ResponseEntity.notFound().build())

    }

    @DeleteMapping("/matches/{id}")
    fun deleteMatchById(@PathVariable(value = "id") matchId: Long): ResponseEntity<Void> {

        return matchRepository.findById(matchId).map { match  ->
            matchRepository.delete(match)
            ResponseEntity<Void>(HttpStatus.OK)
        }.orElse(ResponseEntity.notFound().build())

    }
}
